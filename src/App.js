import React, { Component } from 'react';
import './App.css';
import TopTitle from './components/TopTitle';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Work from './components/Work';
import Clients from './components/Clients'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TopTitle />
        <About />
        <Services />
        <Why />
        <Work />
        <Clients />
      </div>
    );
  }
}

export default App;
