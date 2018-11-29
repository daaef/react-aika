import React, { Component } from 'react';
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="uk-flex uk-flex-wrap">
          <div className="uk-width-1-1@s uk-text-center">
            <a href="#" className="uk-margin-right"><img src={instagram} alt=""/></a>
            <a href="#" className="uk-margin-right"><img src={facebook} alt=""/></a>
            <a href="#"><img src={twitter} alt=""/></a>
          </div>
          <div className="uk-width-1-1@s uk-light links uk-text-center">
            <a href="#" className="uk-link-reset uk-display-block">Terms & Conditions for Senders</a>
            <a href="#" className="uk-link-reset uk-display-block">General Terms for Commuters</a>
            <a href="#" className="uk-link-reset uk-display-block">Privacy Policy for Senders</a>
            <a href="#" className="uk-link-reset uk-display-block">Privacy Policy for Commuters</a>
          </div>
          <div className="uk-width-1-1@s uk-margin-top uk-light sub-footer">
            <div className="container">
              <h5 className="uk-margin-remove">COPYRIGHT &copy;AIKA 2018</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
