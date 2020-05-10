import React, { Component } from 'react';

class SoundCloudBlock extends Component {

    render() {
        return(
            <iframe width="100%" height="166" scrolling="no" frameBorder="no"  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.trackId}`}></iframe>
        )
    }
}

export default SoundCloudBlock