import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import {Menu} from './menu.js'
import {Sidebar} from './sidebar.js';
import {MainPage} from './mainPage.js';
import SignIn from './signIn.js';
import SignUp from './signUp.js';

class Template extends React.Component{
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

ReactDOM.render(<Template/>, document.getElementById('root'));