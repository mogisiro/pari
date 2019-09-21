import React from 'react';
import './index.css';

export class MainPage extends React.Component{
    render(){
        return (
            <main>
                <section className='shortcuts'>
                    <div id='latest'>최신글</div>
                    <div id='popular'>인기글</div>
                    <div id='qna'>Q&A</div>
                </section>
                    <section className='majors'>
                    <div id='softWare'>융소</div>
                    <div id='CE'>컴공(복전)</div>
                    <div id='AI'>인공지능</div>
                    <div id='BD'>빅데이터</div>
                </section>
            </main>
        )
    }
} 
