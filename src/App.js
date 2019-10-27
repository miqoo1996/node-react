import React  from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './Content';

import { reducer } from './reducer/GLReducer';
import { storeContext, store } from './reducer/storeContext';
import NavBar, { NavBarItem } from './NavBar';

import './Other'
import './scss/layout.scss'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.portfolioRef = React.createRef();
    }

    render() {
        return <storeContext.Provider value={store}>
              <NavBar>
                 <NavBarItem href="#page-top"> Home </NavBarItem>
                 <NavBarItem pref={this.portfolioRef} href="#portfolio"> Portfolio </NavBarItem>
              </NavBar>

              <Header welcomeText="Welcome To Miqo.Com" infoText="I'm Miqayel Ishkhanyan - Full-Stack Web Developer" />

              <Content pref={this.portfolioRef} />

              <Footer text="&copy; 2019 All rights reserved. Miqo.Com" />
        </storeContext.Provider>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));