import * as React from 'react';
import FlightContainers from './FlightContainers';
import { connect } from 'react-redux';
import { Welcome } from '../components/Welcome';
const mapStateToProps = state => ({
    modal: state.flights.modal
});
//smart component
const MainContainer = (props) => {
    const conditionalRender = () => {
        props.fields === false ? React.createElement(Welcome, null) : React.createElement(FlightContainers, null);
    };
    return (React.createElement("div", null,
        React.createElement(FlightContainers, { modal: props.changeModal })));
};
export default connect(mapStateToProps, null)(MainContainer);
//# sourceMappingURL=MainContainer.js.map