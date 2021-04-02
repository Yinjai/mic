import React, { Component } from 'react';
import SoundCloudBlock from './SoundCloudBlock.js';

class EpisodeInfoBlock extends Component {

    render() {
        const title = this.props.title.replace(/&amp;/g, '&');
        const description = this.props.description.replace(/&amp;/g, '&');
        return (
            <div>
                <img className="episodeThumbnail" src={this.props.thumbnail} alt="" />
                <section>
                    <header>
                        <h3>Episode {title}</h3>
                    </header>
                    <p>{this.props.pubDate.split(' ').shift()}</p>
                    <p>{description}</p>
                    <p>
                        Made in Chafford <a href="https://twitter.com/madeinchafford">Twitter</a> & <a href="https://www.instagram.com/madeinchafford/">Instagram</a>
                    </p>
                </section>
                <p>
                    <SoundCloudBlock index={this.props.episodeId} />
                </p>
                <p className="podcastLinks">
                    <a className="spotifyPodcasts" rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/show/3WH7F5Br5i9AQGSugnlDHF">
                        <img className="spotifyPodcastsImage" src="/images/spotifylisten.jpg" alt="" />
                    </a>
                    <a className="applePodcasts" rel="noopener noreferrer" target="_blank" href="https://podcasts.apple.com/gb/podcast/made-in-chafford/id1235162230">
                        <img className="applePodcastsImage" src="/images/applelisten.svg" alt="" />
                    </a>
                </p>
                <section>
                    <header>
                        <h3>Connect with the hosts</h3>
                    </header>
                    <p>
                        Demi's <a href="https://twitter.com/2Demz">Twitter</a> & <a href="https://www.instagram.com/6thfeb/">Instagram</a>
                    </p>
                    <p>
                        Eman's <a href="https://twitter.com/@EmanG45">Twitter</a> & <a href="https://www.instagram.com/emang45/">Instagram</a>
                    </p>
                    <p>
                        Collins' <a href="https://twitter.com/ColeSanusi">Twitter</a> & <a href="https://www.instagram.com/colesanusi/">Instagram</a>
                    </p>
                </section>
            </div>
        )
    }
}
export default EpisodeInfoBlock