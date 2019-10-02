import React from 'react';
import './app.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


export default function Sidebar(){
  const isLogged = useSelector(state => state.isLogged);
        return (
          <nav>
            <ul>
              <h4>
                {!isLogged && <Link to="/login">로그인&emsp;&emsp;&emsp;</Link>}
                {isLogged && <Link to="/mypage">내 페이지&emsp;&emsp;</Link>}
                <Link to="/">&emsp;&emsp;logo</Link>
              </h4>
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
        );
        }
