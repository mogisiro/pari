//연습용
import React from 'react';
import './index.css';
import {SubmenuForCommunity} from './submenu.js';
import {SubmenuForInfo} from './submenu.js';
import {SubmenuForMajors} from './submenu.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Menu1 extends React.Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state ={ menuActive: false};
    }
    toggleMenu(){
        let menuState = !this.state.menuActive;
        this.setState({menuActive: menuState});
    }
    render(){
        return (
            <ul>
                <li className='menuItem' onClick={this.toggleMenu}>
                    <a href="#">커뮤니티</a>
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            {this.state.menuActive && <SubmenuForCommunity /> }
                        </ReactCSSTransitionGroup>
                </li>
            </ul>
        )
    }
}

export class Menu2 extends React.Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state ={ menuActive: false};
    }
    toggleMenu(){
        let menuState = !this.state.menuActive;
        this.setState({menuActive: menuState});
    }
    render(){
        return (
            <ul>
                <li className='menuItem' onClick={this.toggleMenu}>
                    <a href="#">정보</a>
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            { this.state.menuActive && <SubmenuForInfo /> }
                        </ReactCSSTransitionGroup>
                </li>
            </ul>
        )
    }
}

export class Menu3 extends React.Component {
    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state ={ menuActive: false};
    }
    toggleMenu(){
        let menuState = !this.state.menuActive;
        this.setState({menuActive: menuState});
    }
    render(){
        return (
            <ul>
                <li className='menuItem' onClick={this.toggleMenu}>
                    <a href="#">전공</a>
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
                            { this.state.menuActive && <SubmenuForMajors /> }
                        </ReactCSSTransitionGroup>
                </li>
            </ul>
        )
    }
}

export class MenuLogin extends React.Component {
    render(){
        return (
            <ul> 
                <li className='menuItem'>로그인</li>
            </ul>
        )
    }
}

export class MenuLogo extends React.Component {
    render(){
        return (
            <ul> 
                <li className='menuItem'>logo</li>
            </ul>
        )
    }
}