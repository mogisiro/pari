import React from 'react';
import {Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import {Menu} from './menu.js'
import {Sidebar} from './sidebar.js';
import {MainPage} from './mainPage.js';
import {Login} from './login.js';

class Template extends React.Component{
    render(){
        return (
            <div className='container'>
                <header>
                   <Menu/>
                </header>
                <section className='content'>
                    <nav>
                        <Sidebar/>
                    </nav>
                    <main>
                        <MainPage/>
                    </main>
                </section>
                <footer>
                </footer>
            </div>
        )
    }
}

ReactDOM.render(<Template/>, document.getElementById('root'));