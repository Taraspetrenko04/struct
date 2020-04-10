import React, { Component } from 'react';
import './style.scss';


export default class NavbarItems extends Component {
    state = {
        active: false
    }

    menuHandleClick = () => {
        this.setState({
            active : !this.state.active
        })
    }


    render() {
        const { active } = this.state;
        let btnStyle = 'header__button-menu';
        let styleLine = 'header__line';
        let styleLine02 = 'header__line02';
        let styleLineTop = 'header__line-top';
        let styleLineBotoom = 'header__line-bottom';
        let nav = 'navbar-list';
     
        if( active ){
            styleLine += ' active';
            styleLine02 += ' active02';
            styleLineTop += ' active-before';
            styleLineBotoom += ' active-before';
            nav += ' navbar-active';
        }


        return(
            <div className='navbar-items'>
                <ul className={ nav }>
                    <li className='navbar-item'>Главная</li>
                    <li className='navbar-item'>О нас</li>
                    <li className='navbar-item'>Услуги</li>
                    <li className='navbar-item'>Отзывы</li>
                    <li className='navbar-item'>Контакты</li>
                </ul>

                <div className={btnStyle} onClick={ this.menuHandleClick }>
                    <span className={ styleLineTop }></span>
                    <span className={ styleLine }></span>
                    <span className={ styleLine02 }></span>
                    <span className={ styleLineBotoom }></span>
                 </div>
            </div>
        )
    }
}