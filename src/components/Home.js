import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import SideBar from "./Sidebar";



class Home extends Component {
  componentDidMount(){
  let menuIcon = document.querySelector('.menuIcon');
  let nav = document.querySelector('.overlay-menu');
  console.log(nav);
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open')
  });


// Toggle Menu Icon ========================================
  let toggleIcon = document.querySelector('.menuIcon');
    console.log(menuIcon);
  
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
        <Header/>
        <Landing/>
        <Footer/>
        <SideBar/>
      </div>
    );
  }
}

export default Home;
