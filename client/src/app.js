import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Menu} from './pages/menu.js';
import Sidebar from './pages/sidebar.js';
import {MainPage} from './pages/mainPage.js';
import {MyPage} from './pages/myPage.js';
import SignIn from './pages/signIn.js';
import SignUp from './pages/signUp.js';

export class App extends React.Component{
    render(){
        return (
            <Router>
                <div className='container'>
                    <header>
                        <Menu/>
                    </header>
                    <section className='content'>
                        <nav>
                            <Sidebar/>
                        </nav>
                        <main>
                            <Switch>
                                <Route path="/" exact component={MainPage}/>
                                <Route path="/login" component={SignIn}/>
                                <Route path="/register" component={SignUp}/>
                                <Route path="/mypage" component={MyPage}/>
                            </Switch>
                        </main>
                    </section>
                    <footer>
                    </footer>
                </div>
            </Router>
        )
    }
}
