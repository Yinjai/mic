import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <ul>
                <li><Link to="/" className="Home">Home</Link></li>
                <li><Link to="/episodes/page/1" className="Episodes">Episodes</Link></li>
                <li><Link to="/micplaylist" className="Episodes">MIC Playlist</Link></li>
                <li><Link to="/about" className="Episodes">About</Link></li>
            </ul>
        )
    }
}

export default Navigation