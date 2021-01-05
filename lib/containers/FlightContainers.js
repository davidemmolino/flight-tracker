//dumb component
import * as React from 'react';
import * as actions from '../actions/actions';
import Form from './Form.jsx';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FlightInfo } from '../components/FlightInfo';
const mapStateToProps = state => ({
    modal: state.flights.modal,
    addTrip: state.flights.flights,
    flights: state.flights,
    flightInfo: state.flightInfo
});
//referenced using props
const mapDispatchToProps = dispatch => ({
    changeModal: () => dispatch(actions.changeModal()),
    addTrip: (values) => dispatch(actions.addTrip(values))
});
const FlightContainers = (props) => {
    const submit = (values) => {
        props.changeModal();
        props.addTrip(values);
    };
    let array = props.flights.flights;
    return (React.createElement("div", null,
        React.createElement("div", { className: "landing-text" },
            React.createElement("h1", null, "Welcome to Flight Tracker!"),
            React.createElement("p", null, "Start by entering a destination."),
            React.createElement("button", { onClick: () => props.changeModal(), className: "button-purple" }, "+")),
        React.createElement("hr", null),
        array.map((el, i) => React.createElement(FlightInfo, { key: i, details: el })),
        React.createElement(Modal, { isOpen: props.modal, ariaHideApp: false, className: "modal" },
            React.createElement(Form, { onSubmit: submit, submitHandler: submit, changeModal: props.changeModal, addTrip: props.addTrip }))));
};
export default connect(mapStateToProps, mapDispatchToProps)(FlightContainers);
//# sourceMappingURL=FlightContainers.js.map