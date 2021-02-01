import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    // Se puede poner Div o Fragment
    <Fragment>
      <Header/>
      <Footer/>
    </Fragment>
  );
}

export default App;
