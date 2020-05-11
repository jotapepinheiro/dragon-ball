import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/app.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Charactes from './pages/Characters';
import Home from './pages/Home';
import Planets from './pages/Planets';

const App = () => (
  <div className="font-sans bg-gray-100 flex flex-col min-h-screen w-full">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/charactes">
          <Charactes />
        </Route>

        <Route exact path="/planets">
          <Planets />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
