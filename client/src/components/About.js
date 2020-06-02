import React, { Component } from 'react';
import Loader from '../functions/Loader';
import ContactForm from './ContactForm';

class About extends Component {

    render() {        
        return(
			<section id="main">
				<div className="container">
                    <Loader />
				</div>
			</section>
        )
    }
}

export default About