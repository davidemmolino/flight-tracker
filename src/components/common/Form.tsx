import React, { FC, useCallback } from 'react';
import { Field, reduxForm } from 'redux-form';


interface ContactFormProps {
    handleSubmit?: () => {},
    changeModal?: () => {},
    submitHandler?: () => {},
    addTrip?: () => {}
}
export const ContactForm: FC<ContactFormProps> = ({ handleSubmit, changeModal, submitHandler, addTrip }) => {

    const submitAction = useCallback((e: any) => {
        e.preventDefault()
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="city">City</label>
                <br />
                <Field name="city" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="departure">Departure</label>
                <br />
                <Field name="departure" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="arrival">Arrival</label>
                <br />
                <Field name="arrival" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="airline">Airline</label>
                <br />
                <Field name="airline" component="input" type="text" />
            </div>
            {/* submitted data is passed as JSON object to onSubmit function */}
            {/* submit button should close modal if post req was sent successfully*/}
            <button type="submit" onClick={submitAction}>Submit</button>
        </form>
    )
}


