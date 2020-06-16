import React, { Component } from 'react';
import Loader from '../functional/Loader';
import ContactForm from './ContactForm';

class About extends Component {

    render() {        
        return(
			<section id="main">
				<div className="container">
                    <article className="box post">
                        {/* <img className="episodeThumbnail" src={this.props.thumbnail.replace('http', 'https')} alt="" /> */}
                        <header>
                            <h3>About us</h3>
                        </header>
                            <p>Placeholders</p>
                            <p>Placeholders</p>
                            <p>
                                Made in Chafford <a href="https://twitter.com/madeinchafford">Twitter</a> & <a href="https://www.instagram.com/madeinchafford/">Instagram</a>
                            </p>
                    </article>
                    <Loader />
				</div>
			</section>
        )
    }
}

export default About