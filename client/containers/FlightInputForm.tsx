import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const FlightInputFormPropType = {
    onSubmit: PropTypes.func,
    submitHandler: PropTypes.func,
    changeModal: PropTypes.func,
    addTrip: PropTypes.func
};

type FlightInput = InferProps<typeof FlightInputFormPropType>;

let FlightInputForm = (props: FlightInput) => {
    const { onSubmit } = props;
    // let sendPost = () => {
    //     onSubmit()
    //     .then(() => {
    //         return props.changeModal()
    //     })
    // }

    return (
        <>temp</>
        // <form onSubmit={ submitHandler }>
        //     <div>
        //         <label htmlFor="city">City</label>
        //         <br/>
        //         <Field name="city" component="input" type="text" />
        //     </div>
        //     <div>
        //         <label htmlFor="departure">Departure</label>
        //         <br/>
        //         <Field name="departure" component="input" type="text" />
        //     </div>
        //     <div>
        //         <label htmlFor="arrival">Arrival</label>
        //         <br/>
        //         <Field name="arrival" component="input" type="text" />
        //     </div>
        //     <div>
        //         <label htmlFor="airline">Airline</label>
        //         <br/>
        //         <Field name="airline" component="input" type="text" />
        //     </div>
        //     {/* submitted data is passed as JSON object to onSubmit function */}
        //     {/* submit button should close modal if post req was sent successfully*/}
        //     <button type="submit" onClick={(e) => { 
        //         e.preventDefault() 
        //         return sendPost
        //     }}>Submit</button>
        // </form>
    )
}

// FlightInputForm = reduxForm({
//     form: 'flight-details'
// })(FlightInputForm)

export default FlightInputForm;

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