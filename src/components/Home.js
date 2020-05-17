import React, { Component } from 'react'
import IntroBlock from './IntroBlock.js';
import Episodes from './Episodes.js';
import Header from './Header.js';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return(
            <div>
                <section id="header" className="headerNoPadding">				
                    <section id="banner" className="bannerNoMargin">
                        <header>
                            <h2>Podcast, Playlists, People</h2>
                            <p>Music, Pop Culture & Entertainment. Catch us every Tuesday!</p>
                        </header>
                    </section>

                    <section id="intro" className="container">
                        <div className="row">
                            <IntroBlock position="first" logo="fab fa-youtube fa-9x" title="YouTube" description="YouTube" link="https://www.youtube.com/channel/UCvTfkEuNaBnltO8loGct3Ww"/>
                            <IntroBlock position="middle" logo="fab fa-spotify fa-9x" title="Spotify" description="Spotify" link="https://open.spotify.com/show/3WH7F5Br5i9AQGSugnlDHF"/>
                            <IntroBlock position="last" logo="fab fa-soundcloud fa-9x" title="Soundcloud" description="Soundcloud" link="https://soundcloud.com/madeinchafford"/>
                        </div>
                    </section>
                </section>

            <section id="main">
                <div className="container">
                    <div className="row">
                        <Episodes state={this.props} />
                        <div className="col-12">
                            <section>
                                <header className="major">
                                    <h2>The Blog</h2>
                                </header>
                                <div className="row">
                                    <div className="col-6 col-12-small">
                                        <section className="box">
                                            <a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
                                            <header>
                                                <h3>Magna tempus consequat</h3>
                                                <p>Posted 45 minutes ago</p>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                            <footer>
                                                <ul className="actions">
                                                    <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                    <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                                </ul>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <section className="box">
                                            <a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
                                            <header>
                                                <h3>Aptent veroeros aliquam</h3>
                                                <p>Posted 45 minutes ago</p>
                                            </header>
                                            <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                            <footer>
                                                <ul className="actions">
                                                    <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                    <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                                </ul>
                                            </footer>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default Home