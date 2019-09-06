import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Menu} from './menu.js'
//import {Menu1, Menu2, Menu3, MenuLogin, MenuLogo} from './menu.js';
import {Sidebar} from './sidebar.js';
import {MainPage} from './mainPage.js';

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