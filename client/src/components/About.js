import React, { Component } from 'react';
import Loader from '../functional/Loader';

class About extends Component {

    render() {
        return (
            <section id="main">
                <div className="container">
                    <article className="box post">
                        <a className="image featured"><img src="/images/about.png" alt="" /></a>
                        <header>
                            <h3>About us</h3>
                        </header>
                        <p>
                            Made In Chafford is a podcast run by 3 guys
                            from Essex who talk Music, Pop Culture & Entertainment.
                            The idea was born from a drunken idea on a uni night out and
                            blossomed into a fully fledged podcast,
                            which has been running for 4 years strong.
                            With over 30K listens on all platforms and a host of amazing guests,
                            we have strived every week to give you quality content.
                            MIC itself is a group of friends which
                            formed back in secondary school.
                        </p>
                        <p>
                            We created this space to also have people from all
                            walks of life to join us in conversation.
                            We believe it’s important that everyone is given a voice, so if you want to appear
                            on the podcast or have any other requests please reach out to the hosts
                            individually or through the contact form below.
                        </p>
                        <p>
                            Catch us on: <a href="https://twitter.com/madeinchafford">Twitter</a> & <a href="https://www.instagram.com/madeinchafford/">Instagram</a>
                        </p>
                    </article>
                    <Loader />
                </div>
            </section>
        )
    }
}

export default About