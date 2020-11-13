import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightContainers from './FlightContainers.jsx';
import * as actions from '../actions/actions'
import Welcome from '../components/Welcome.jsx';

const mapStateToProps = state => ({
    modal: state.flights.modal
})

const mapDispatchToProps = dispatch => ({
    changeModal: () => dispatch(actions.changeModal())
})

//smart component
class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.flightHandler = this.flightHandler.bind(this)
    }

    conditionalRender() {
        this.props.fields === false ? <Welcome /> : <FlightContainers />
    }
    // flightHandler() {
        
    // }
    render() {
        console.log(`props`, this.props)
        return (
            <div >
                <FlightContainers modal={this.props.changeModal}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);