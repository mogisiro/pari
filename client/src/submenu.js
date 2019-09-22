import React from 'react';
import './app.css';

export class SubmenuForCommunity extends React.Component{
    render(){
        return (
            <ul className='submenu'>
                <li className='submenu-item'>
                    자유게시판
                </li>
                <li className='submenu-item'>
                    Q&A
                </li>
                <li className='submenu-item'>
                    스터디/프로젝트
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
                    수업 후기
                </li>
                <li className='submenu-item'>
                    프로그램 후기
                </li>
                <li className='submenu-item'>
                    족보
                </li>
                <li className='submenu-item'>
                    개발
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
                    융소
                </li>
                <li className='submenu-item'>
                    컴공
                </li>
                <li className='submenu-item'>
                    빅데이터
                </li>
                <li className='submenu-item'>
                    인공지능
                </li>
            </ul>
        )
    }
}