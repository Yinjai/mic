import React, { Component } from "react";
import YouTube from 'react-youtube';

class YouTubeFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {video: []};
        this.VideoList = this.VideoList.bind(this);
    }

    VideoList() {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyD6k1K3IoF-NWApc-Jo3tpvhtuDhqtPRx4&channelId=${this.props.channelId}&part=snippet,id&order=date&maxResults=1`)
            .then(resp => resp.json())
            .then((resp) => {
                if(resp.items === undefined) {
                    this.setState({})
                } else {
                    this.setState({video: resp.items});
                }
        });
    }

    componentDidMount() {
        this.VideoList();
    }

    render() {

        return (
            <div className="col-6 col-12-small">
                {this.state.video.map((item, i) =>{
                    console.log(item);
                    return(
                        <section key ={i} className="box">
                            <div className="image featured">
                                <YouTube videoId={item.id.videoId} opts = {{height: '300', width: '100%'}} />
                            </div>
                            <header>
                                <h3>{item.snippet.title}</h3>
                                <p>{item.snippet.description}</p>
                            </header>
                            <footer className="blockLinks">
                                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}&feature=emb_title`} className="button solid">Watch on YouTube</a>
                            </footer>
                        </section>
                    )
                })}
            </div>
        )
    }
}

export default YouTubeFeed