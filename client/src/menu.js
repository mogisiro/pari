import React from 'react';
import './index.css';
import {SubmenuForCommunity} from './submenu.js';
import {SubmenuForInfo} from './submenu.js';
import {SubmenuForMajors} from './submenu.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.toggleMenu1 = this.toggleMenu1.bind(this);
        this.toggleMenu2 = this.toggleMenu2.bind(this);
        this.toggleMenu3 = this.toggleMenu3.bind(this);
        this.state ={ 
            commuActive: false,
            infoActive: false,
            majorActive: false    
        };
    }
    toggleMenu1(){
        let menuState = !this.state.commuActive;
        this.setState({commuActive: menuState});
    }
    toggleMenu2(){
        let menuState = !this.state.infoActive;
        this.setState({infoActive: menuState});
    }
    toggleMenu3(){
        let menuState = !this.state.majorActive;
        this.setState({majorActive: menuState});
    }
    render(){
        return (
            <ul className='upperbar'>
                <li className='menuItem' onClick={this.toggleMenu1}>
                    커뮤니티
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            {this.state.commuActive && <SubmenuForCommunity /> }
                        </ReactCSSTransitionGroup>
                </li>
                <li className='menuItem' onClick={this.toggleMenu2}>
                    정보
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.infoActive && <SubmenuForInfo /> }
                        </ReactCSSTransitionGroup>
                </li>
                <li className='menuItem' onClick={this.toggleMenu3}>
                    전공
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.majorActive && <SubmenuForMajors /> }
                        </ReactCSSTransitionGroup>
                </li>
                <li className='menuItem'>로그인</li>
                <li className='menuItem'>logo</li>
            </ul>
        )
    }
}
