import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import EpisodePage from './components/EpisodePage.js';
import Episodes from './components/Episodes.js';
import Header from './components/Header.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './functional/ScrollToTop.js';
import MICPlaylist from './components/MICPlaylist.js';
import About from './components/About.js';
import ErrorPage from './components/ErrorPage.js';
import GA from './functional/GoogleAnalytics';

const App = () => {

    return (
        <div id="page-wrapper" style={{ height: '100%' }}>
            <BrowserRouter>
                {GA.init() && <GA.RouteTracker />}
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/episodes/page/:page" exact component={() => <Episodes variant="list" />} />
                    <Route path="/episode/:episodeId" component={EpisodePage} />
                    <Route path="/micplaylist" component={MICPlaylist} />
                    <Route path="/about" component={About} />
                    <Route path="*" component={ErrorPage} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

