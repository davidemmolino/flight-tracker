import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import Modal from 'react-modal';

let ContactForm = (props) => {
    const { handleSubmit } = props;
    console.log('this is handle submit', handleSubmit);
    //send POST to server with field inputs
    let sendPost = () => {
        fetch('/modal', {
            headers: { "Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(handleSubmit)
        })
        .then((data) => {
            data.json()
         })
        .then((done) => {
            props.submitHandler(done)
            props.changeModal()
            console.log('*****', done)
            return 
        })
        .catch((err) => console.log(`error here`, err))
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="city">City</label>
                <br/>
                <Field name="city" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="departure">Departure</label>
                <br/>
                <Field name="departure" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="arrival">Arrival</label>
                <br/>
                <Field name="arrival" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="airline">Airline</label>
                <br/>
                <Field name="airline" component="input" type="text" />
            </div>
            {/* submitted data is passed as JSON object to onSubmit function */}
            {/* submit button should close modal if post req was sent successfully*/}
            <button type="submit" onClick={(e) => e.preventDefault(), sendPost}>Submit</button>
        </form>
    )
}

ContactForm = reduxForm({
    form: 'flight-details'
})(ContactForm)

export default ContactForm;

