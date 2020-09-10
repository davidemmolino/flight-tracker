import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightContainers from './FlightContainers.jsx';

//mapStateToProps
//mapDispatchToAction?

//smart component
export default class MainContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'hello'
        }
    }
    // should render FlightContainers component aka flight cards
    //reads data from state

    render() {
        return (
            <div>
                <h1>Hello this is the H1 in the react component!</h1>
                <FlightContainers testing={this.state.name} />
            </div>
        )
    }
}
