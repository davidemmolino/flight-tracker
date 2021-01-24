import React from 'react';

import Routes from './Routes'
import './App.scss';
import MainContainer from 'components/layout/MainContainer';


function App() {
  return (
    <MainContainer className="app">
      <Routes />
    </MainContainer>
  );
}

export default App;
