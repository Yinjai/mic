import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTubeBlock from '../components/YouTubeBlock';

function YouTubeFeed() {
    const count = 1;
    const corsUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCvTfkEuNaBnltO8loGct3Ww&api_key=${process.env.REACT_APP_RSSAPI}&count=${count}`;
    const [initialised, setInitialised] = useState(false);
    const [listings, setListings] = useState([]);

    useEffect(() => {
        if (!initialised) {
            const getListings = async () => {
                try {
                    const response = await axios.get(corsUrl)
                    setListings(response.data.items);
                } catch (ex) {
                    console.log(ex);
                }
            }
            getListings(corsUrl);
            setInitialised(true);
        }
    }, [initialised, corsUrl]);

    return (
        listings.map((l, i) => {
            return (
                <YouTubeBlock
                    key={i}
                    title={l.title}
                    link={l.link}
                />
            )
        })
    )

}

export default YouTubeFeed