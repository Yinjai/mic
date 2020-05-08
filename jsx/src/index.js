import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { Router, Route } from 'react-router';


const App = ()=> {
    return (
        <div id="page-wrapper">
            {/* <Router>
                <Route path={"/"} component={Home} />
            </Router> */}
            <Home />
            <Footer />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

