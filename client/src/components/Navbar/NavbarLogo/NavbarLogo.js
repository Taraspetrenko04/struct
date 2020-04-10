import React, { Component } from 'react';
import './style.scss';
import logo from '../../../img/Logo.png';


export default class NavbarItems extends Component {
    render() {
        return(
            <div className='navbar-logo'>
                <img src={ logo }></img>
            </div>
        )
    }
}