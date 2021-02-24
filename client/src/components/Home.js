import React, { Component } from 'react'
import IntroBlock from './IntroBlock.js';
import Episodes from './Episodes.js';

import YouTube from 'react-youtube';
class Home extends Component {

    render() {
        const videoId = "Hu8Ryw66eo0";
        return (
            <div>
                <section id="header" className="headerNoPadding">
                    <section id="banner" className="bannerNoMargin">
                        <header>
                            <h2>Podcast, Playlists, People</h2>
                            <p>Music, Pop Culture & Entertainment. Catch us every Tuesday!</p>
                        </header>
                    </section>

                    <section id="intro" className="container">
                        <section id="intro" className="latestSpotifyEp">
                            <header className="major">
                                <h2>Lastest Podcast Episode</h2>
                            </header>
                            <iframe
                                title="spotifyframe"
                                src="https://playlist.megaphone.fm/?p=WIZ1272549635&episodes=1"
                                width="100%"
                                height="200"
                                frameBorder="0"
                                allowtransparency="true"
                                allow="encrypted-media"
                                scrolling="no">
                            </iframe>
                        </section>
                        <div className="row">
                            <IntroBlock position="middle" logo="fab fa-youtube fa-9x" title="YouTube" link="https://www.youtube.com/channel/UCvTfkEuNaBnltO8loGct3Ww" />
                            <IntroBlock position="middle" logo="fab fa-spotify fa-9x" title="Spotify" link="https://open.spotify.com/show/3WH7F5Br5i9AQGSugnlDHF" />
                            <IntroBlock position="middle" logo="fab fa-soundcloud fa-9x" title="Soundcloud" link="https://soundcloud.com/madeinchafford" />
                            <IntroBlock position="middle" logo="fab fa-apple fa-9x" title="Apple Podcasts" link="https://podcasts.apple.com/gb/podcast/made-in-chafford/id1235162230" />
                        </div>
                    </section>
                </section>

                <section id="main">
                    <div className="container">
                        <div className="row">
                            <Episodes state={this.props} variant="home" />
                            <div className="col-12">
                                <section>
                                    <header className="major">
                                        <h2>Lastest YouTube Content</h2>
                                    </header>
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                                <div className="image featured">
                                                    <YouTube videoId={videoId} opts={{ height: '300', width: '100%' }} />
                                                </div>
                                                <header>
                                                    <h3>74. Love & Time</h3>
                                                </header>
                                                <footer className="blockLinks">
                                                    <a href={`https://www.youtube.com/watch?v=${videoId}`} className="button solid">Watch on YouTube</a>
                                                </footer>
                                            </section>
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <section className="box">
                                                <div className="image featured">
                                                    <YouTube videoId="vLRjpGAiPi4" opts={{ height: '300', width: '100%' }} />
                                                </div>
                                                <header>
                                                    <h3>Air Jordan 11 Jubilee Review</h3>
                                                    <p>A review on the recently released Air Jordan 11 Jubilee</p>
                                                </header>
                                                <footer className="blockLinks">
                                                    <a href={`https://www.youtube.com/watch?v=vLRjpGAiPi4`} className="button solid">Watch on YouTube</a>
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