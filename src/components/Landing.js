import React, { Component } from 'react';
import handPhone from '../assets/img/handPhone.png';
import request from '../assets/img/request.png';
import pickup from '../assets/img/pickup.png';
import deliver from '../assets/img/deliver.png';

class Landing extends Component {
  render() {
    return (
      <section>
        <section className="sect1">
          <div className="container uk-flex uk-flex-wrap uk-flex-middle">
            <div
              className="uk-width-1-2@m uk-padding-large uk-flex-last@m uk-padding-remove-vertical uk-padding-remove-right uk-flex uk-flex-center">
              <div className="uk-light">
                <h2 className="uk-heading-primary uk-text-bold">EASY AS AIKA</h2>
                <p>Send Anything, Anywhere <br/>at Anytime from<br/> your mobile device</p>
              </div>
            </div>
            <div className="uk-width-1-2@m uk-flex-first@m">
              <img src={handPhone} alt=""/>
            </div>
          </div>
        </section>
      <section className="sect2">
        <div className="container uk-padding-large">
          <h2 className="uk-heading-primary light uk-text-center">How AIKA Works</h2>
          <div className="uk-flex uk-child-width-1-3@m uk-flex-between uk-flex-wrap uk-text-center">
            <div className="uk-padding">
              <h4 className="uk-text-bold">1. Request</h4>
              <img src={request} alt=""/>
                <p>
                  Choose a commuter that
                  best suits your budget,
                  then set a location to request
                  a delievry
                </p>
            </div>
            <div className="uk-padding">
              <h4 className="uk-text-bold">2. Pickup</h4>
              <img src={pickup} alt=""/>
                <p>
                  Wait for the Aika
                  commuter to arrive and
                  hand over the package
                  to be delivered
                </p>
            </div>
            <div className="uk-padding">
              <h4 className="uk-text-bold">3. Deliver</h4>
              <img src={deliver} alt=""/>
                <p>
                  Confirm delievery of
                  package from the receiver
                  and rate the
                  Aika commuter
                </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    );
  }
}

export default Landing;
