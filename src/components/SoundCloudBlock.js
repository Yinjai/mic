import React, { Component } from 'react';
import { useLocation } from 'react-router';

function SoundCloudBlock() {
    const location = useLocation();
    
    return(
        <iframe width="100%" height="166" scrolling="no" frameBorder="no"  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${location.pathname.split('episode/').pop()}`}></iframe>
    )
    
    
}

export default SoundCloudBlock;