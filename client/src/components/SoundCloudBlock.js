import React from 'react';
import { useLocation } from 'react-router';

function SoundCloudBlock() {
    const location = useLocation();

    return (
        <iframe
            title="soundcloudframe"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            src={`https://player.megaphone.fm/${location.pathname.split('episode/').pop()}`}
        />
    )

}

export default SoundCloudBlock;