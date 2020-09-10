//dumb component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import Form from './Form.jsx';
import Modal from 'react-modal';
import FlightInfo from '../components/FlightInfo.jsx'

const mapStateToProps = state => ({
    modal: state.flights.modal,
    addTrip: state.flights.flights
})
//referenced using props
const mapDispatchToProps = dispatch => ({
    changeModal: () => dispatch(actions.changeModal()),
    addTrip: (values) => dispatch(actions(actions.addTrip(values)))
})

class FlightContainers extends Component {
    constructor(props) {
        super(props) 
        this.submit = this.submit.bind(this);
        this.submitHandler = this.submitHandler.bind(this)
    }

    submit(values) {
        console.log(values)
    }

    submitHandler(values) {
        actions.addTrip(values)
    }

    render () {
        // let flightCards = FlightInfo.map((el) => {
        //     // if(el !== undefined) 
        // });
        return (
            <div>
                <h1>this is my prop obj</h1>
                <button onClick={() => this.props.changeModal()}>Click me to show modal</button>
                {/* { flightCards } */}
                <Modal isOpen={this.props.modal} ariaHideApp={false} className="modal">
                    <Form onSubmit={this.submit} submitHandler={this.submitHandler} changeModal={this.props.changeModal} addTrip={this.props.addTrip}/>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainers);