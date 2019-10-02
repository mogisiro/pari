import React from 'react';
import './app.css';
import {SubmenuForCommunity} from './submenu.js';
import {SubmenuForInfo} from './submenu.js';
import {SubmenuForMajors} from './submenu.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.toggleMenu1 = this.toggleMenu1.bind(this);
        this.toggleMenu2 = this.toggleMenu2.bind(this);
        this.toggleMenu3 = this.toggleMenu3.bind(this);
        this.changeCSS1 = this.changeCSS1.bind(this);
        this.state ={ 
            commuActive: false,
            infoActive: false,
            majorActive: false, 
        };
    }
    toggleMenu1(){
        let menuState = !this.state.commuActive;
        this.setState({
            commuActive: menuState,
            infoActive: false,
            majorActive: false,   
        });
    }
    toggleMenu2(){
        let menuState = !this.state.infoActive;
        this.setState({
            commuActive: false,
            infoActive: menuState,
            majorActive: false,
        });
    }
    toggleMenu3(){
        let menuState = !this.state.majorActive;
        this.setState({
            commuActive: false,
            infoActive: false,
            majorActive: menuState,
        });
    }
    changeCSS1(){
        let x = document.getElementById('commu');
        let y = document.getElementById('info');
        let z = document.getElementById('major');
        if (!this.state.commuActive) x.style.color = "dimgray";
        else x.style.color = "white";
        y.style.color = z.style.color = "white";
    }
    changeCSS2(){
        let x = document.getElementById('commu');
        let y = document.getElementById('info');
        let z = document.getElementById('major');
        if (!this.state.infoActive) y.style.color = "dimgray";
        else y.style.color = "white";
        x.style.color = z.style.color = "white";
    }
    changeCSS3(){
        let x = document.getElementById('commu');
        let y = document.getElementById('info');
        let z = document.getElementById('major');
        if (!this.state.majorActive) z.style.color = "dimgray";
        else z.style.color = "white";
        y.style.color = x.style.color = "white";
    }
    render(){
        return (
            <ul className='upperbar'>
                <li className='menuItem' id='commu' onClick={(event)=>{this.toggleMenu1(); this.changeCSS1();}}>
                    커뮤니티
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            {this.state.commuActive && <SubmenuForCommunity /> }
                        </ReactCSSTransitionGroup>
                </li>
                <li className='menuItem' id='info' onClick={(event)=>{this.toggleMenu2(); this.changeCSS2();}}>
                    정보
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.infoActive && <SubmenuForInfo /> }
                        </ReactCSSTransitionGroup>
                </li>
                <li className='menuItem' id='major' onClick={(event)=>{this.toggleMenu3(); this.changeCSS3();}}>
                    전공
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.majorActive && <SubmenuForMajors /> }
                        </ReactCSSTransitionGroup>
                </li>
                <li className='menuItem'>
                    <Link to="/login">로그인</Link>
                </li>
                <li className='menuItem'>
                    <Link to="/">logo</Link>
                </li>
            </ul>
        )
    }
}
