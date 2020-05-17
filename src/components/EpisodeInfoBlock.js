import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EpisodeInfoBlock extends Component {
    
    render() {
        return(
            <div>
                <section>
                    <header>
                        <h3>Episode {this.props.title}</h3>
                    </header>
                        <p>{this.props.pubDate.split(' ').shift()}</p>
                        <p>{this.props.description}</p>
                        <p>
                            Made in Chafford <a href="https://twitter.com/madeinchafford">Twitter</a> & <a href="https://www.instagram.com/madeinchafford/">Instagram</a>
                        </p>
                </section>
                <section>
                    <header>
                        <h3>Connect with the hosts</h3>
                    </header>
                    <p>
                        Demi's <a href="https://twitter.com/2Demz">Twitter</a> & <a href="https://www.instagram.com/6thfeb/">Instagram</a>
                    </p>
                    <p>
                        Eman's <a href="https://twitter.com/@EmanG45">Twitter</a> & <a href="https://www.instagram.com/emang45/">Instagram</a>
                    </p>
                    <p>
                        Collins' <a href="https://twitter.com/ColeSanusi">Twitter</a> & <a href="https://www.instagram.com/colesanusi/">Instagram</a>
                    </p>
                </section>
            </div>
        )
    }
}
export default EpisodeInfoBlock