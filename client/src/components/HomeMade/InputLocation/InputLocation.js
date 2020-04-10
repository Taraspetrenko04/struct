import React, { Component } from "react";
import './style.scss';
import point from '../../../img/FormaPoint1@1X.png';


export default class InputLocation extends Component {
    render() {
        return(
            <div>
                <div className='location-wrapper'>
                    <form className='location-form'>
                    <div className='loction-image'></div>
                    <input className='location-input' type="text" name="location" placeholder='Enter Street, City, Pincode' />
                    <div className='point-block'><img src={point}></img></div>
                    </form>
                    <p className='location-coment'>Enter your location to view menu</p>
                </div>
            </div>
        )
    }
}