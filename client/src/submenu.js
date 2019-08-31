import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class SubmenuForCommunity extends React.Component{
    render(){
        return (
            <ul className='submenu'>
                <li className='submenu-item'>
                    <a>자유게시판</a>
                </li>
                <li className='submenu-item'>
                    <a>Q&A</a>
                </li>
                <li className='submenu-item'>
                    <a>스터디/프로젝트</a>
                </li>
            </ul>
        )
    }
}

export class SubmenuForInfo extends React.Component{
    render(){
        return (
            <ul className='submenu'>
                <li className='submenu-item'>
                    <a>수업 후기</a>
                </li>
                <li className='submenu-item'>
                    <a>프로그램 후기</a>
                </li>
                <li className='submenu-item'>
                    <a>족보</a>
                </li>
                <li className='submenu-item'>
                    <a>개발</a>
                </li>
            </ul>
        )
    }
}

export class SubmenuForMajors extends React.Component{
    render(){
        return (
            <ul className='submenu'>
                <li className='submenu-item'>
                    <a>융소</a>
                </li>
                <li className='submenu-item'>
                    <a>컴공</a>
                </li>
                <li className='submenu-item'>
                    <a>빅데이터</a>
                </li>
                <li className='submenu-item'>
                    <a>인공지능</a>
                </li>
            </ul>
        )
    }
}

ReactDOM.render(<SubmenuForCommunity/>, document.getElementById('root'));
ReactDOM.render(<SubmenuForInfo/>, document.getElementById('root'));
ReactDOM.render(<SubmenuForMajors/>, document.getElementById('root'));