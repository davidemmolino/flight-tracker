//dumb component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import Form from './Form.jsx';
import Modal from 'react-modal';
import FlightInfo from '../components/FlightInfo.jsx'
// import Welcome from '../components/Welcome';

const mapStateToProps = state => ({
    modal: state.flights.modal,
    addTrip: state.flights.flights,
    flights: state.flights,
    flightInfo: state.flightInfo 
})
//referenced using props
const mapDispatchToProps = dispatch => ({
    changeModal: () => dispatch(actions.changeModal()),
    addTrip: (values) => dispatch(actions.addTrip(values))
})

class FlightContainers extends Component {
    constructor(props) {
        super(props) 
        this.submit = this.submit.bind(this);
        // this.submitHandler = this.submitHandler.bind(this)
    }

    submit(values) {
        console.log('in htere', values)
        this.props.changeModal()
        this.props.addTrip(values)
    }

    // submitHandler(values) {
    //     console.log(values)
    // }

    render () {
        //push and render multiple components
        let array = this.props.flights.flights;
        console.log('ARRAY AFTER MAP', array);
        // let result = ;
        // console.log('ARRAY AFTER MAP', result);

        return (
            <div>
                <div className="landing-text">
                    <h1>Welcome to Flight Tracker!</h1>
                    <p>Start by entering a destination.</p>
                    <button onClick={() => this.props.changeModal()} className="button-purple">+</button>
                </div>
                <hr/>
                { array.map((el, i) => <FlightInfo key={i} details={el} />)}
                <Modal isOpen={this.props.modal} ariaHideApp={false} className="modal">
                    <Form onSubmit={this.submit} submitHandler={this.submitHandler} changeModal={this.props.changeModal} addTrip={this.props.addTrip}/>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainers);