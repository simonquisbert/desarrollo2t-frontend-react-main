/*
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dictionary from './components/Dictionary'; // Módulo dictionary

function App() {
  return (
    <>
    <Router>
      <div>
        <Switch>
          <Route path="/dictionary" component={Dictionary} />
        </Switch>
      </div>
    </Router>
    <>
        <Navbar />
        <Outlet />
      </>
    </>
  );
}
*/

import React from 'react';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <div className="App">
      <h1>Aplicación de Diccionario</h1>
      <Dictionary />
    </div>
  );
}

export default App;
