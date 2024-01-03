import React, { Component } from 'react';
import PodcastFeed from '../functional/PodcastFeed.js';

class EpisodePage extends Component {

    render() {
        return (
            <section id="main">
                <div className="container">
                    <article className="box post">
                        <header className="episodeHeader">
                            <h2>Currently listening to</h2>
                            <p></p>
                        </header>
                        <PodcastFeed variant="single" episodeId={this.props.location.pathname.split('episode/').pop()} />
                    </article>

                </div>
            </section>
        )
    }
}

export default EpisodePage