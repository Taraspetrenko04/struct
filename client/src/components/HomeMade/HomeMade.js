import React, { Component } from "react";
import './style.scss';
import InputLocation from './InputLocation/InputLocation.js'

export default class HomeMade extends Component {
    render() {
      return (
        <section className='homemade'>
          <h2 className='homemade-slogan'>Homemade Food Just a Click Away</h2>
          <InputLocation />
        </section>
      )
    }
}

