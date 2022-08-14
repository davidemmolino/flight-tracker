import * as React from 'react';
import FlightContainers from './FlightContainers';
import PropTypes, { InferProps } from 'prop-types';
import { connect } from 'react-redux';
import { Welcome } from '../components/Welcome';
import { RootState } from '../store';

const ModalPropType = {
    fields: PropTypes.bool,
    changeModal: PropTypes.func
};

type ModalType = InferProps<typeof ModalPropType> 

const mapStateToProps = (state: RootState) => ({
    modal: state.flights.modal
})

//This will check if there are any destinations in store
//if there are none then display the welcome components else FlightListContainers
const WelcomeContainer = ({ fields, changeModal }: ModalType) => {

    const conditionalRender = () => {
        fields === false ? <Welcome /> : <FlightContainers />
    }
    
    return (
        <div >
            <Welcome />
        </div>
    )
}


export default connect(mapStateToProps, null)(WelcomeContainer);