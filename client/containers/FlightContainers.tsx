//dumb component
import * as React from 'react';
import { addTrip } from '../actions/flightDetailsActions';
import { changeModal } from '../actions/modalActions';
import FlightInputForm from './FlightInputForm';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FlightDetailsCard } from '../components/FlightDetailsCard';
import { AppDispatch, RootState } from '../store';
import { FlightInfo } from '../types/types';

// TODO: change the + to an hero Icon
const mapStateToProps = (state: RootState) => ({
    modal: state.modal,
    addTrip: state.flights,
    flights: state.flights,
    // flightInfo: state.flightInfo 
})

//referenced using props
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    changeModal: (value: boolean) => dispatch(changeModal(value)),
    // addTrip: (values: ) => dispatch(addTrip(values))
})

// this renders a list of flight details cards
const FlightContainers = (props) => {

    const submit = (values: FlightInfo) => {
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
            { flightInfo.map((flightInfo: FlightInfo, i: number) => <FlightDetailsCard key={i} details={flightInfo} />)}
            <Modal isOpen={props.modal} ariaHideApp={false} className="modal">
                <FlightInputForm onSubmit={submit} submitHandler={submit} changeModal={props.changeModal} addTrip={props.addTrip}/>
            </Modal>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainers);