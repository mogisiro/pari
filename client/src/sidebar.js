import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class Sidebar extends React.Component {
    render(){
        return(
            <nav>
                <ul>
                    <h4>로그인</h4>
                        <h3>커뮤니티</h3>
                        <li>자유게시판</li>
                        <li>Q&A</li>
                        <li>스터디/프로젝트</li>
                        <h3>정보</h3>
                        <li>수업 후기</li>
                        <li>프로그램 후기</li>
                        <li>족보</li>
                        <li>개발</li>
                        <h3>전공</h3>
                        <li>융소</li>
                        <li>컴공</li>
                        <li>빅데이터</li>
                        <li>인공지능</li>
                    </ul>
                </nav>
        )
    }
}
ReactDOM.render(<Sidebar/>, document.getElementById('root'));