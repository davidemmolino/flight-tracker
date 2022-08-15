import * as React from 'react';
import { LoginContainer } from '../containers/LoginContainer';
import Welcome from '../containers/WelcomeContainer';

export const App = () => {
    return (
        <div className="container">
            <LoginContainer/>
        </div>
    )
};