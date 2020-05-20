import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <div>
                <section id="header">				
                    <h1><Link to="/" className="MIC">Made in Chafford</Link></h1>
                    <nav id="nav">
                        <ul>
                            <li><Link to="/" className="Home">Home</Link></li>
                            <li>< Link to="/episodes" className="Episodes">Episodes</Link></li>
                            <li>< Link to="/micplaylist" className="Episodes">MIC Playlist</Link></li>
                            <li>< Link to="/about" className="Episodes">About</Link></li>
                        </ul>
                    </nav>
                </section>
                
                <section id="header" className="headerNoPadding" />					
            </div>
        )
    }
}

export default Header