//dumb component
import React, { FC } from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import { FlightInfo } from 'components/common/FlightInfo';
import { ContactForm } from 'components/common/Form';
import * as actions from 'store/actions/actions'

interface FlightContainerType {
    flights: [],
    changeModal: () => void,
    addTrip: any,
    modal: any
}

export const FlightContainers: FC<FlightContainerType> = ({ flights, changeModal, addTrip, modal }) => {

    const submit = (values: any) => {
        changeModal()
        addTrip(values)
    }

    let flightInfo = flights;
    return (
        <div>
            <div className="landing-text">
                <h1>Welcome to Flight Tracker!</h1>
                <p>Start by entering a destination.</p>

                <hr />
                {flightInfo.map((el, i) => <FlightInfo key={i} details={el} />)}
                <Modal isOpen={modal} ariaHideApp={false} className="modal">
                    <ContactForm
                        // submitHandler={submit}
                        // changeModal={changeModal}
                        addTrip={addTrip} />
                </Modal>
            </div>
    )
}
