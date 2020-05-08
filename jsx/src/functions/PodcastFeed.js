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
            console.log(response);
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
        <div className="feed-page">
        <h1 className="center title">
          <img src={data.image} /> {data.title}
        </h1>
        {listings.map((l, i) => {
          return (
            <PodBlock key={i}>
              <PodBlock.Title className="PodBlock-title">{l.title}</PodBlock.Title>
              <PodBlock.Body>
                <p>{l.description}</p>
                <p>{l.content}</p>
              </PodBlock.Body>
            </PodBlock>
          );
        })}
      </div>
    )
    
    
}

export default PodcastFeed