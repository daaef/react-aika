import React, { Component } from 'react';
import heroLogo from '../assets/img/heroLogo.png';
import appstore from '../assets/img/appstore.png';
import playstore from '../assets/img/playstore.png';
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar/>
        <div className="grid-abs uk-flex uk-flex-middle uk-flex">
          <div className="logo-write uk-padding-remove">
            <div className="uk-margin-medium-bottom">
              <img src={heroLogo} alt=""/>
            </div>
            <div className="flex-end uk-flex uk-flex-wrap">
              <div className="uk-width-1-2@m uk-flex uk-flex-wrap uk-flex-around">
                <img className="uk-margin-top" src={appstore} alt=""/>
                <img className="uk-margin-top" src={playstore} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
