import React, { Component } from 'react';
import SpotifyBlock from './SpotifyBlock.js';

class MICPlaylist extends Component {

    render() {
        return(
			<section id="main">
				<div className="container">
					<article className="box post">
						<a href="#" className="image featured"><img src="/images/pic01.jpg" alt="" /></a>
						<header>
							<h2>Currently listening to</h2>
							<p></p>
						</header>
						<p>
							<SpotifyBlock />
						</p>
						<p className="podcastLinks">
							<a className ="spotifyPodcasts" target="_blank" href="https://open.spotify.com/playlist/0absvxmEjPk41K9F0tmJGx?si=MewYOujHQmuWBtzFoVienw">
								<img className ="spotifyPodcastsImage"src="/images/spotifylisten.webp" alt="" />
							</a>
						</p>
					</article>

				</div>
			</section>
        )
    }
}

export default MICPlaylist