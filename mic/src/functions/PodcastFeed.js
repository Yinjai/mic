import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PodBlock from '../components/PodBlock';

function PodcastFeed () {
  
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

    return(
        listings.slice(0,6).map((l, i) => {
            return (
                <PodBlock 
                    index={i} 
                    key={i} 
                    title={l.title}
                    description={l.description}
                    thumbnail={l.thumbnail}
                />
            );
        })
    )
    
    
}

export default PodcastFeed