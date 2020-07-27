import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './app.css';

class Sidebar extends React.Component{
  render(){
    const loginButton = (
      <h4>
        <li><Link to="/login">로그인&emsp;&emsp;&emsp;</Link>
        <Link to="/">&emsp;&emsp;logo</Link></li>
      </h4>
    );
    const mypageButton = (
      <h4>
        <li><Link to="/mypage">내 페이지&emsp;&emsp;</Link>
        <Link to="/">&emsp;&emsp;logo</Link></li>
      </h4>
    );
    return (
      <nav>
        <ul>
          {this.props.isLoggedIn ? mypageButton : loginButton }
          <h3>커뮤니티</h3>
          <li><Link to="/board">자유게시판</Link></li>
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
}

Sidebar.propTypes = {
  isLoggedIn: PropTypes.bool
};

Sidebar.defaultProps = {
  isLoggedIn: false
};

export default Sidebar;
