import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class SideBar extends Component {
  render() {
    return (
      <div className="overlay-menu">
        <ul className="menu">
          <li><a href="commuter">COMMUTER</a></li>
          <li><a href="cities">CITIES</a></li>
          <li><a href="contact">CONTACT</a></li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
