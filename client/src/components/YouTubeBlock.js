import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubeBlock extends Component {

    render() {
        const videoId = this.props.link.split('?')[1].split('v=')[1];
        return (
            <section className="box">
                <div className="image featured">
                    <YouTube videoId={videoId} opts={{ height: '300', width: '100%' }} />
                </div>
                <header>
                    <h3>{this.props.title}</h3>
                </header>
                <footer className="blockLinks">
                    <a href={this.props.link} className="button solid">Watch on YouTube</a>
                </footer>
            </section>
        )
    }
}
export default YouTubeBlock