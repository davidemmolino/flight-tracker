const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

//middleware that recognizes an incoming request obj as a JSON obj and makes it into a JS obj.
app.use(express.json());

//server css style
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'))

//serve index.html
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.post('/modal', (req, res) => {
    console.log(req.body)
    res.json(`all good here!`)
})

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Error, page not found.'
    })
})

//global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error happened' },
    };
    const errorObj = { ...defaultErr, ...err };
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
})

//listening to port
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
});