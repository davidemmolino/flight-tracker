import * as React from 'react';
import * as actions from '../actions/actions'
import FlightContainers from './FlightContainers';
import { connect } from 'react-redux';
import { Welcome } from '../components/Welcome';

const mapStateToProps = state => ({
    modal: state.flights.modal
})

//smart component
const MainContainer = (props) => {

    const conditionalRender = () => {
        props.fields === false ? <Welcome /> : <FlightContainers />
    }
    
    return (
        <div >
            <FlightContainers modal={props.changeModal}/>
        </div>
    )
}


export default connect(mapStateToProps, null)(MainContainer);