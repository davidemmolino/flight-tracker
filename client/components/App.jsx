import React, { Component } from 'react';
import Wrapper from '../containers/MainContainer.jsx';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Wrapper/>
                <div className="bg1"/>
                <div className="bg2"/>
                <div className="bg3"/>
            </div>
        )
    }
}
export default App;