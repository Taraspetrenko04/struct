import React, { Component } from 'react';
import './style.scss';

// import HeaderPannel from '../HeaderPannel/HeaderPannel.js';
import Navbar from '../Navbar/Navbar.js';


export default class Header extends Component {
    render() {
        return(
            <div className='header'>
                {/* <HeaderPannel /> */}
                <Navbar />
            </div>
        )
    }
}