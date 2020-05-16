import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PodBlock from '../components/PodBlock';
import EpisodeInfoBlock from '../components/EpisodeInfoBlock';

function PodcastFeed (props) {
  
    const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=http://feeds.soundcloud.com/users/soundcloud:users:153165239/sounds.rss";
    const [initialised, setInitialised] = useState(false);
    const [listings, setListings] = useState([]);
    const [data, setData]  = useState({});
       
    const getListings = async url => {
        try {
            const response = await axios.get(corsUrl);
            setListings(response.data.items);
            setData(response.data.feed);
            console.log(response.data);
            
            console.log(props)
        } catch (ex) {
            console.log(ex);
        }
    }

    useEffect(() => {
        if (!initialised) {
          getListings(corsUrl);
          setInitialised(true);
        }
    });

    if(props.variant==='single') {
        return(
           <EpisodeInfoBlock />
        )
    } else {
        return(
            listings.slice(0,6).map((l, i) => {
                return (
                    <PodBlock 
                        index={l.guid.split('tracks/').pop()} 
                        key={i} 
                        title={l.title}
                        description={l.description}
                        thumbnail={l.thumbnail}
                    />
                );
            })
        )
    }
}

export default PodcastFeed