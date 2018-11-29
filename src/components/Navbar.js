import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import '../App.css';
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div data-uk-sticky="sel-target: #navbar; cls-active: uk-navbar-sticky; animation: uk-animation-slide-top">
          <nav id="navbar" className="">
            <div className="nav-wrapper">
              <div className="logo">
                <a href="#home">
                  <img className="uk-display-block" src={logo} alt=""/>
                </a>
              </div>
              <ul className="menu uk-margin-remove">
                <li><NavLink exact={true} activeClassName="uk-active" to="/commuter">COMMUTER</NavLink></li>
                {/*<li><NavLink exact={true} activeClassName="uk-active" to="cities">CITIES</NavLink></li>
                <li><NavLink exact={true} activeClassName="uk-active" to="contact">CONTACT</NavLink></li>*/}
                <li><a href="cities">CITIES</a></li>
                <li><a href="contact">CONTACT</a></li>
              </ul>
            </div>
          </nav>
          <div className="menuIcon">
            <span className="icon icon-bars"/>
            <span className="icon icon-bars overlay"/>
          </div>
        </div>
    );
  }
}

export default Navbar;
