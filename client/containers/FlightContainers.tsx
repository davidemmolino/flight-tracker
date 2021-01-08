//dumb component
import * as React from 'react';
import * as actions from '../actions/actions'
import Form from './Form';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FlightInfo } from '../components/FlightInfo';

const mapStateToProps = state => ({
    modal: state.flights.modal,
    addTrip: state.flights.flights,
    flights: state.flights,
    flightInfo: state.flightInfo 
})
//referenced using props
const mapDispatchToProps = dispatch => ({
    changeModal: (value) => dispatch(actions.changeModal(value)),
    addTrip: (values) => dispatch(actions.addTrip(values))
})

const FlightContainers = (props) => {

    const submit = (values) => {
        props.changeModal()
        props.addTrip(values)
    }

    let array = props.flights.flights;

    return (
        <div>
            <div className="landing-text">
                <h1>Welcome to Flight Tracker!</h1>
                <p>Start by entering a destination.</p>
                <button onClick={() => props.changeModal(props.modal)} className="button-purple">+</button>
            </div>
            <hr/>
            { array.map((el, i) => <FlightInfo key={i} details={el} />)}
            <Modal isOpen={props.modal} ariaHideApp={false} className="modal">
                <Form onSubmit={submit} submitHandler={submit} changeModal={props.changeModal} addTrip={props.addTrip}/>
            </Modal>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainers);