import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { BrowserRouter, Route } from 'react-router-dom';


const App = ()=> {
    return (
        <div id="page-wrapper">
            <BrowserRouter>
                <Route path="/" exact component={Home} />
            </BrowserRouter>
            <Footer />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

