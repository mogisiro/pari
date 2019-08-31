import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SubmenuForCommunity} from './submenu.js';
import {SubmenuForInfo} from './submenu.js';
import {SubmenuForMajors} from './submenu.js';
import {CSSTransitionGroup} from 'react-addons-css-transition-group';
//let CSSTransitionGroup = React.addons.CSSTransitionGroup;

export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {showMenu: false};
    }
    handleHover = (event) => {
        this.setState({ showAboutMenu: true });
      };
      
    handleLeave = (event) => {
        this.setState({ showAboutMenu: false });
    };
     
    render(){
        return (
            <header>
            <ul className='upperbar'>
                <li className='menuItem' onMouseLeave={this.handleLeave}>
                    <a onMouseEnter={this.handleHover}>커뮤니티</a>
                    <div className="submenuContainer">
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.showMenu && <SubmenuForCommunity /> }
                        </CSSTransitionGroup>
                     </div>
                </li>
                <li className='menuItem' onMouseLeave={this.handleLeave}>
                    <a onMouseEnter={this.handleHover}>정보</a>
                    <div className="submenuContainer">
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.showMenu && <SubmenuForInfo /> }
                        </CSSTransitionGroup>
                     </div>
                </li>
                <li className='menuItem' onMouseLeave={this.handleLeave}>
                    <a onMouseEnter={this.handleHover}>전공</a>
                    <div className="submenuContainer">
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            { this.state.showMenu && <SubmenuForMajors /> }
                        </CSSTransitionGroup>
                     </div>
                </li>
                <li className='menuItem'>로그인</li>
                <li className='menuItem'>logo</li>
            </ul>
            </header>
        )
    }
}

ReactDOM.render(<Menu/>, document.getElementById('root'));
