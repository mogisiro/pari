//memu.js가 안 먹어서 임시로 만든 파일
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

export class MenuTmp extends React.Component {
    render(){
        return(
            <header>
                <ul className='upperbar'>
                    <li>커뮤니티</li>
                    <li>정보</li>
                    <li>전공</li>
                    <li>로그인</li>
                    <li>logo</li>
                </ul>
            </header>
        )
    }
}

ReactDOM.render(<MenuTmp/>, document.getElementById('root'));