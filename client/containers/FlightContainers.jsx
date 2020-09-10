//dumb component
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import Modal from 'react-modal';

//dispatch an action to change modal to true or false
//add to state a property to check if modal is true or false
const FlightContainers = (props) => {
    const clickHandler = () => {
        fetch('/', {
            headers: { "Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(props.modal)
        })
        .then((data) => {
            console.log(data)
            data.json()
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>this is my prop obj</h1>
            <button onClick={() => clickHandler()}>Click me to show modal</button>
            <Modal isOpen={props.modal} className="modal">
                <form action="ADD_TRIP" method="post" onSubmit={() => console.log(`hello`)}>
                    <label htmlFor="flight_info">Enter your flight details:</label>
                    <div>
                        <p>City</p>
                        <input type="text" name="flight_info"/>
                        <br/>
                        <p>Departure</p>
                        <input type="text" name="flight_info"/>
                        <br/>
                        <p>Arrival</p>
                        <input type="text" name="flight_info"/>
                        <br/>
                        <p>Airline</p>
                        <input type="text" name="flight_info"/>
                    </div>
                <button type="submit">Go!</button>
                </form>
            </Modal>
        </div>
    )
}

export default FlightContainers;