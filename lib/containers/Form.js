import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
let ContactForm = (props) => {
    const { handleSubmit } = props;
    let sendPost = () => {
        props.submitHandler()
            .then(() => {
            return props.changeModal();
        });
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "city" }, "City"),
            React.createElement("br", null),
            React.createElement(Field, { name: "city", component: "input", type: "text" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "departure" }, "Departure"),
            React.createElement("br", null),
            React.createElement(Field, { name: "departure", component: "input", type: "text" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "arrival" }, "Arrival"),
            React.createElement("br", null),
            React.createElement(Field, { name: "arrival", component: "input", type: "text" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "airline" }, "Airline"),
            React.createElement("br", null),
            React.createElement(Field, { name: "airline", component: "input", type: "text" })),
        React.createElement("button", { type: "submit", onClick: (e) => {
                e.preventDefault();
                return sendPost;
            } }, "Submit")));
};
ContactForm = reduxForm({
    form: 'flight-details'
})(ContactForm);
export default ContactForm;
// console.log('this is handle submit', handleSubmit);
// fetch('/modal', {
//     headers: { "Content-Type": "application/json"},
//     method: "POST",
//     //nothing works
//     body: JSON.stringify(handleSubmit)
// })
// .then((data) => {
//     data.json()
//  })
// .then((done) => {
//     props.submitHandler(done)
//     props.changeModal()
//     console.log('*****', done)
//     return 
// })
// .catch((err) => console.log(`error here`, err))
//# sourceMappingURL=Form.js.map