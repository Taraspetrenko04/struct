import React, { Component } from "react";
import './style.scss';

import Header from '../Header/Header';
import Services from '../Services/Services';
import OurProjects from '../OurProjects/OurProjects';
import Footer from '../Footer/Footer';



class App extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <Services />
            <OurProjects />
            <Footer />
        </div>
        
      )}
}
export default App;
