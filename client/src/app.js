import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.css';
import {Menu} from './menu.js'
import {Sidebar} from './sidebar.js';
import {MainPage} from './mainPage.js';
import {MyPage} from './myPage.js';
import SignIn from './signIn.js';
import SignUp from './signUp.js';

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
