import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PodBlock from '../components/PodBlock';
import EpisodeInfoBlock from '../components/EpisodeInfoBlock';
import Pagination from '../components/Pagination';

function PodcastFeed(props) {
    const count = 30
    const corsUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.megaphone.fm%2FWIZ1272549635&api_key=${process.env.REACT_APP_RSSAPI}&count=${count}`;
    const [initialised, setInitialised] = useState(false);
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listings.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (props.variant === "single") {
        const episodeInfo = listings.filter(listings => listings.enclosure.link.split('https://traffic.megaphone.fm/').pop().split('.')[0] === props.episodeId);
        return (
            episodeInfo.map((l, i) => {
                return (
                    <EpisodeInfoBlock
                        key={i}
                        title={l.title}
                        description={l.description}
                        pubDate={l.pubDate}
                        thumbnail={l.thumbnail}
                        episodeId={props.episodeId}
                    />
                )
            })
        )
    } else if (props.variant === "list") {
        return (
            <div className="row">
                {
                    currentPosts.map((l, i) => {
                        return (
                            <PodBlock
                                index={l.enclosure.link.split('https://traffic.megaphone.fm/').pop().split('.')[0]}
                                key={i}
                                title={l.title}
                                description={l.description}
                                thumbnail={l.thumbnail}
                            />
                        );
                    })
                }
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={listings.length}
                    paginate={paginate}
                />
            </div>
        )
    } else {
        return (
            listings.slice(0, 6).map((l, i) => {
                return (
                    <PodBlock
                        index={l.enclosure.link.split('https://traffic.megaphone.fm/').pop().split('.')[0]}
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