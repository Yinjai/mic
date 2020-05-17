import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SoundCloudBlock from './SoundCloudBlock.js';
import PodcastFeed from '../functions/PodcastFeed.js';

class EpisodePage extends Component {

    render() {
        return(
            <div>
				<section id="header" className="headerNoPadding">					
					<h1><Link to="/" className="MIC">Made in Chafford</Link></h1>
					<nav id="nav">
						<ul>
							<li><Link to="/" className="Home">Home</Link></li>
							<li>< Link to="/episodes" className="Episodes">Episodes</Link></li>
						</ul>
					</nav>
				</section>

				<section id="main">
					<div className="container">
						<article className="box post">
							<a href="#" className="image featured"><img src="/images/pic01.jpg" alt="" /></a>
							<header>
								<h2>Currently listening to</h2>
								<p></p>
							</header>
							<p>
								<SoundCloudBlock index={this.props.location.pathname.split('episode/').pop()} />
							</p>
							<p className="podcastLinks">
								<a className ="spotifyPodcasts" target="_blank" href="https://open.spotify.com/show/3WH7F5Br5i9AQGSugnlDHF">
									<img className ="spotifyPodcastsImage"src="/images/spotifylisten.webp" alt="" />
								</a>
								<a className ="applePodcasts" target="_blank" href="https://podcasts.apple.com/gb/podcast/made-in-chafford/id1235162230">
									<img className ="applePodcastsImage" src="/images/applelisten.svg" alt="" />
								</a>
							</p>
							<PodcastFeed variant="single" episodeId={this.props.location.pathname.split('episode/').pop()}/>
						</article>

					</div>
				</section>
            </div>
        )
    }
}

export default EpisodePage