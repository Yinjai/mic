import React, { Component } from 'react'
import IntroBlock from './IntroBlock.js';
import Episodes from './Episodes.js';
import YouTubeFeed from './YouTubeFeed.js';

import YouTube from 'react-youtube';
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
                            <IntroBlock position="middle" logo="fab fa-youtube fa-9x" title="YouTube" link="https://www.youtube.com/channel/UCvTfkEuNaBnltO8loGct3Ww"/>
                            <IntroBlock position="middle" logo="fab fa-spotify fa-9x" title="Spotify" link="https://open.spotify.com/show/3WH7F5Br5i9AQGSugnlDHF"/>
                            <IntroBlock position="middle" logo="fab fa-soundcloud fa-9x" title="Soundcloud" link="https://soundcloud.com/madeinchafford"/>
                            <IntroBlock position="middle" logo="fab fa-apple fa-9x" title="Apple Podcasts" link="https://podcasts.apple.com/gb/podcast/made-in-chafford/id1235162230"/>
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
                                    <h2>Lastest YouTube Content</h2>
                                </header>
                                <div className="row">
                                    <div className="col-6 col-12-small">
                                        <section className="box">
                                            <div className="image featured">
                                                <YouTube videoId="BkPzLBVSRnw" opts = {{height: '300', width: '100%'}} />
                                            </div>
                                            <header>
                                                <h3>New Girl (ft Gemma)</h3>
                                                <p>This week the guys have a special guest Gemma! On the latest episode of the Made In Chafford Podcast they take on:</p>
                                                <li>Fashion</li>
                                                <li>6ix9ine Returns</li>
                                                <li>Going Number 1</li>
                                                <li>Quarantine TV</li>
                                                <li>Becoming a Trillionaire</li>
                                            </header>
                                            <footer className="blockLinks">
                                                <a href={`https://www.youtube.com/watch?v=BkPzLBVSRnw&feature=emb_title`} className="button solid">Watch on YouTube</a>
                                            </footer>
                                        </section>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <section className="box">
                                            <div className="image featured">
                                                <YouTube videoId="qsHlSr-wzyU" opts = {{height: '300', width: '100%'}} />
                                            </div>
                                            <header>
                                                <h3>AlphaEdge Parley Adidas 4D</h3>
                                                <p>A review of the AlphaEdge Parley Adidas 4D on Adidas 4D week</p>
                                            </header>
                                            <footer className="blockLinks">
                                                <a href={`https://www.youtube.com/watch?v=qsHlSr-wzyU&feature=emb_title`} className="button solid">Watch on YouTube</a>
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