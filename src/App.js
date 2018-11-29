import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import Home from "./components/Home";
import Commuter from "./components/Commuter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/commuter" component={Commuter}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
