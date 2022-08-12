//dumb component
import * as React from 'react';
import * as actions from '../actions/flightDetailsActions'
import FlightInputForm from './FlightInputForm';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FlightDetailsCard } from '../components/FlightDetailsCard';

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

// this renders a list of flight details cards
const FlightContainers = (props) => {

    const submit = (values) => {
        props.changeModal()
        props.addTrip(values)
    }

    let flightInfo = props.flights;
    return (
        <div>
            <div className="landing-text">
                <h1>Welcome to Flight Tracker!</h1>
                <p>Start by entering a destination.</p>
                <button onClick={() => props.changeModal(props.modal)} className="button-purple">+</button>
            </div>
            <hr/>
            { flightInfo.map((el, i) => <FlightDetailsCard key={i} details={el} />)}
            <Modal isOpen={props.modal} ariaHideApp={false} className="modal">
                <FlightInputForm onSubmit={submit} submitHandler={submit} changeModal={props.changeModal} addTrip={props.addTrip}/>
            </Modal>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainers);