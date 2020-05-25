import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import EpisodePage from './components/EpisodePage.js';
import Episodes from './components/Episodes.js';
import Header from './components/Header.js';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './functions/ScrollToTop.js';
import MICPlaylist from './components/MICPlaylist.js';

const App = ()=> {

    return (
        <div id="page-wrapper" style={{height: '100%'}}>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/episodes" component={Episodes} />
                <Route path="/episode/:episodeId" component={EpisodePage} />      
                <Route path="/micplaylist" component={MICPlaylist} />              
            </BrowserRouter>
            <Footer />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

