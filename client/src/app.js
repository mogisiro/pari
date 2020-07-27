import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Menu} from './components/menu.js';
import {MainPage} from './components/mainPage.js';
import MyPage from './containers/Mypage.js';
import Login from './containers/Login.js';
import Register from './containers/Register.js';
import Sidemenu from './containers/Sidemenu.js';
import {FreeBoard} from './components/freeBoard.js';

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
                            <Sidemenu/>
                        </nav>
                        <main>
                            <Switch>
                                <Route path="/" exact component={MainPage}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/mypage" component={MyPage}/>
                                <Route path="/board" component={FreeBoard}/>
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
