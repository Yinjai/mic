import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import EpisodePage from './components/EpisodePage.js';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './functions/ScrollToTop.js';

const App = ()=> {
    return (
        <div id="page-wrapper">
            <BrowserRouter>
                <ScrollToTop />
                <Route path="/" exact component={Home} />
                <Route path="/episode/:episodeId" component={EpisodePage} />
            </BrowserRouter>
            <Footer />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

