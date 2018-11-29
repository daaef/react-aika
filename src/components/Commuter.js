import React, { Component } from 'react';
import confirmPhone from '../assets/img/confirm-phone.png';
import keypad from '../assets/img/keypad.png';
import user from '../assets/img/user.png';
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import axios, { post } from "axios";



class Commuter extends Component {
  constructor(){
    super();
    
    this.state ={
      activeReg:"",
      activePhone:"activeTitle",
      activeVerify:"",
      activePhoto:"",
      activeThanks:"",
      phone: "",
      error: "",
      verifyNum: "",
      code: "",
      email: "",
      password: "",
      password2: "",
      name: "",
      fileVisual: user,
      file: "",
      id: ""
    }
  }
  
  handlePhone = (e) =>{
    this.setState({
      phone: e.target.value,
      error: ""
    })
  };
  phoneNumber;
  handlePhoneInput = (e) =>{
    e.preventDefault();
  
    if(Number(this.state.phone)){
      if(this.state.phone[0] == 0){
        this.phoneNumber = `+234${this.state.phone.slice(1,11)}`;
        this.setState({
          phone: `${this.phoneNumber}`,
          activeReg:"",
          activePhone:"",
          activeVerify:"activeTitle",
          activePhoto:"",
          activeThanks:"",
        });
      } else {
        this.phoneNumber = `+234${this.state.phone}`;
        this.setState({
          phone: `${this.phoneNumber}`,
          activeReg:"",
          activePhone:"",
          activeVerify:"activeTitle",
          activePhoto:"",
          activeThanks:"",
        });
      }
      const number = {
        phone: this.phoneNumber
      };
      let $this = this;
      axios.post('https://arcane-dusk-99446.herokuapp.com/api/users/verifysms', { phone: $this.phoneNumber })
        .then(res => {
          $this.setState({
            verifyNum: `${res.data.code}`
          });
        })
  
    } else{
      this.setState({
        error: "please fill the form"
      })
    }
  };
  verificationCode;
  handleVerifyCode = (e) => {
    this.setState({
      code: e.target.value
    });
    console.log(this.state.code);
  };
  
  handleVerification = (e) => {
    console.log(this.state.verifyNum);
    e.preventDefault();
    this.verificationCode = this.state.code;
    if(this.verificationCode == this.state.verifyNum) {
      console.log(true);
      this.setState({
        activeReg:"activeTitle",
        activePhone:"",
        activeVerify:"",
        activePhoto:"",
        activeThanks:"",
      });
    }
  }
  
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  
  handlePass1 = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  
  handlePass2 = (e) => {
    this.setState({
      password2: e.target.value
    });
  };
  
  handleName = (e) => {
    this.setState({
      name: e.target.value
    });
  };
  
  handleRegistration = (e) =>{
    e.preventDefault();
    let $this = this;
    let details = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2
    };
    axios.post('https://arcane-dusk-99446.herokuapp.com/api/users/register',details, {
      data: JSON.stringify(details)}).then(res => {
      console.log($this);
      console.log(res.data);
      this.setState({
        id: `${res.data._id}`,
        activeReg:"",
        activePhone:"",
        activeVerify:"",
        activePhoto:"",
        activeThanks:"activeTitle",
      })
    });
  };
  
  handleImage = (e) => {
    this.setState({
      fileVisual: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    })
  };
  
  fileUpload = (file) =>{
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    return  post(url, formData, config)
  };
  
   handlePhotoUp = (e) => {
     e.preventDefault();
     this.fileUpload(this.state.file).then((response) => {
       console.log(response.data);
     });
   };
    
  
  componentDidMount() {
    let menuIcon = document.querySelector('.menuIcon');
    let nav = document.querySelector('.overlay-menu');
    menuIcon.addEventListener('click', () => {
      nav.classList.toggle('open')
      console.log(this.state.phone);
    });


// Toggle Menu Icon ========================================
    let toggleIcon = document.querySelector('.menuIcon');
  
    toggleIcon.addEventListener('click', () => {
      if (toggleIcon.className !== 'menuIcon open') {
        toggleIcon.className += ' open';
      } else {
        toggleIcon.className = 'menuIcon';
      }
    });
  }
  render() {
    return (
      <div>
        <header className="commuter-header">
          <Navbar/>
          <div className="container uk-flex-middle form-container" data-uk-grid>
            <div className="uk-width-3-5@m uk-padding-small">
              <div className="uk-light">
                <h1 className="uk-margin-remove">Deliver With AIKA</h1>
                <p className="uk-h3 light uk-margin-remove">Earn good money<br/>while on the move</p>
              </div>
            </div>
            <div className="uk-width-2-5@m uk-padding-small">
              <div className="uk-padding-remove">
                <div className="uk-card uk-card-default uk-card-body">
                  <h3 className="uk-card-title uk-text-bold">Sign up as a commuter</h3>
                  <div className="uk-alert-danger" data-uk-alert hidden={!this.state.error}>
                    <p>{this.state.error}</p>
                  </div>
                  {this.state.activeReg === "activeTitle" &&(
                    <div>
                      <form onSubmit={this.handleRegistration} className="uk-form-stacked">
                        <div className="uk-margin-small">
                          <label className="uk-form-label" htmlFor="name">FullName</label>
                          <div className="uk-form-controls">
                            <input className="uk-input" id="name" type="text" onChange={this.handleName} value={this.state.name} placeholder="Somebody Doe"/>
                          </div>
                        </div>
                        <div className="uk-margin-small">
                          <label className="uk-form-label" htmlFor="email">Email</label>
                          <div className="uk-form-controls">
                            <input className="uk-input" id="email" type="email" onChange={this.handleEmail} value={this.state.email} placeholder="example@gmail.com"/>
                          </div>
                        </div>
                        <div className="uk-margin-small">
                          <label className="uk-form-label" htmlFor="password">Password</label>
                          <div className="uk-form-controls">
                            <input className="uk-input" id="password" type="password" onChange={this.handlePass1} value={this.state.password} placeholder="***********"/>
                          </div>
                        </div>
                        <div className="uk-margin-small">
                          <label className="uk-form-label" htmlFor="password">Confirm Password</label>
                          <div className="uk-form-controls">
                            <input className="uk-input" id="password" type="password" onChange={this.handlePass2} value={this.state.password2} placeholder="***********"/>
                          </div>
                        </div>
                        <div className="uk-margin-small">
                          <label className="uk-form-label" htmlFor="phone">Phone</label>
                          <div className="uk-form-controls">
                            <input className="uk-input uk-width-expand" id="phone" type="text" value={this.state.phone}/>
                          </div>
                        </div>
                        {/*<div className="uk-margin-small">
                          <label className="uk-form-label" htmlFor="city">City</label>
                          <div className="uk-inline uk-width-1-1@s">
                                      <span className="uk-form-icon uk-form-icon-flip" href="#"
                                            data-uk-icon="triangle-down"/>
                            <select className="uk-select" id="city">
                              <option selected>Abuja</option>
                              <option>Option 01</option>
                              <option>Option 02</option>
                            </select>
                          </div>
                        </div>*/}
                        <div className="uk-margin">
                          <div className="uk-form-controls">
                            <input className="uk-button uk-button-primary uk-width-1-1@s" id="third" type="submit" value="next" />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                  {this.state.activeVerify === "activeTitle" &&(
                    <div>
                      <form onSubmit={this.handleVerification} className="uk-form-stacked uk-text-center">
                        <img src={confirmPhone} alt=""/>
                          <div className="uk-margin-small">
                            <label className="uk-form-label" htmlFor="confirmNum">Confirm Phone Number</label>
                            <div className="uk-form-controls">
                              <input className="uk-input" id="confirmNum" type="number" value={this.state.code} onChange={this.handleVerifyCode} />
                                <span className="uk-text-muted">Type in the code received via SMS</span>
                            </div>
                          </div>
                          {/*<div className="uk-margin">
                            <p className="uk-text-muted">Didnt receive any code?
                              <a href="#" className="uk-link">Send Again</a></p>
                          </div>
                          <div className="uk-margin">
                            <p className="uk-text-muted">Want to Edit/Change your number? <a href="#"
                                                                                             data-uk-switcher-item="previous"
                                                                                             className="uk-link">Go
                              Back</a></p>
                          </div>*/}
                          <div className="uk-margin">
                            <div className="uk-form-controls">
                              <input className="uk-button uk-button-primary uk-width-1-1@s" id="third" type="submit" value="next" />
                            </div>
                          </div>
                      </form>
                    </div>
                  )}
                  {this.state.activePhone === "activeTitle" &&(
                    <div>
                      <form className="uk-form-stacked uk-text-center" onSubmit={this.handlePhoneInput}>
                        <img className="keypad" src={keypad} alt=""/>
                          <div className="uk-margin-small">
                            <div className="uk-form-controls">
                              <label htmlFor="inputNum">Phone Number</label>
                              <div className="uk-inline">
                                <span className="uk-form-icon">+234</span>
                                <input className="uk-input" id="inputNum" type="number" value={this.state.phone} onChange={this.handlePhone}/>
                              </div>
                                <span className="uk-text-muted uk-display-block">Type in Your Phone number</span>
                            </div>
                          </div>
                          {/*<div className="uk-margin">
                            <p className="uk-text-muted">Didnt receive any code?
                              <a href="#" className="uk-link">Send Again</a></p>
                          </div>
                          <div className="uk-margin">
                            <p className="uk-text-muted">Want to Edit/Change your number? <a href="#"
                                                                                             data-uk-switcher-item="previous"
                                                                                             className="uk-link">Go
                              Back</a></p>
                          </div>*/}
                          <div className="uk-margin">
                            <div className="uk-form-controls">
                              <input className="uk-button uk-button-primary uk-width-1-1@s" id="second" type="submit" value="next" />
                            </div>
                          </div>
                      </form>
                    </div>
                  )}
                  {this.state.activePhoto === "activeTitle" &&(
                    <div>
                      <form onSubmit={this.handlePhotoUp} className="uk-form-stacked uk-text-center">
                        <div className="uk-margin-small">
                          <div data-uk-form-custom>
                            <input type="file" onChange={this.handleImage}/>
                              <img src={this.state.fileVisual} alt=""/>
                          </div>
                        </div>
                        <div className="uk-margin">
                          <h5 className="uk-text-bold">Upload Picture</h5>
                        </div>
                        <div className="uk-margin-small">
                          <p className="uk-text-muted">Image must be clear<br/>Max size 1mb</p>
                        </div>
                        <div className="uk-margin-medium-top uk-margin-bottom">
                          <div className="uk-form-controls">
                            <input className="uk-input uk-button uk-button-primary" id="finish"
                                   type="submit" value="finish"/>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                  {this.state.activeThanks === "activeTitle" &&(
                    <div>
                      <div className="uk-card uk-card-body">
                          <h2 className="uk-text-success">Thank You! Login and begin this wonderful journey on AIKA</h2>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <footer className="commuter-footer">
            <div className="uk-flex uk-flex-wrap">
              <div className="uk-width-1-1@s uk-margin-top uk-light sub-footer">
                <div className="container">
                  <h5 className="uk-margin-remove">COPYRIGHT &copy;AIKA 2018</h5>
                </div>
              </div>
            </div>
          </footer>
        </header>
        <SideBar/>
      </div>
    );
  }
}

export default Commuter;
