import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightContainers from './FlightContainers.jsx';
import * as actions from '../actions/actions'

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
    }
    // should render FlightContainers component aka flight cards
    //reads data from state

    //onClick opens a modal input form

    render() {
        console.log(`props`, this.props)
        return (
            <div >
                <div className="welcome">
                    <h1>Welcome!</h1>
                    <p>Start by adding a city! props</p>
                </div>
                <FlightContainers modal={this.props.changeModal}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);