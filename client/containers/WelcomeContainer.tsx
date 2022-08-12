import * as React from 'react';
import * as actions from '../actions/flightDetailsActions'
import FlightContainers from './FlightContainers';
import { connect } from 'react-redux';
import { Welcome } from '../components/Welcome';

const mapStateToProps = state => ({
    modal: state.flights.modal
})

//This will check if there are any destinations in store
//if there are none then display the welcome components else FlightListContainers
const WelcomeContainer = (props) => {

    const conditionalRender = () => {
        props.fields === false ? <Welcome /> : <FlightContainers />
    }
    
    return (
        <div >
            <FlightContainers modal={props.changeModal}/>
        </div>
    )
}


export default connect(mapStateToProps, null)(WelcomeContainer);