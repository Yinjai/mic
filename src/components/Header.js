import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <section id="header">				
                <h1><Link to="/" className="MIC">Made in Chafford</Link></h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/" className="Home">Home</Link></li>
                        <li>< Link to="/episodes" className="Episodes">Episodes</Link></li>
                    </ul>
                </nav>
			</section>
        )
    }
}

export default Header