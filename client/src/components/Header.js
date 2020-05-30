import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import DrawerToggleButton from './DrawerToggleButton';
import Sidebar from './Sidebar';
import Backdrop from './Backdrop';

class Header extends Component {
    state = {
        sidebarOpen: false
    }

    sidebarToggleClickHandler = () => {
        this.setState((prevState)=>{
            return {sidebarOpen: !prevState.sidebarOpen};
        });
    }

    backdropClickHandler = () => {
        this.setState({sidebarOpen: false});
    }

    render() {
        let backdrop;

        if (this.state.sidebarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return(
            <div> 
                <Sidebar show={this.state.sidebarOpen}/>
                {backdrop}
                <section id="header">
                    <DrawerToggleButton sidebarClickHandler={this.sidebarToggleClickHandler} />			
                    <h1><Link to="/" className="MIC">Made in Chafford</Link></h1>
                    <nav id="nav">
                        <Navigation />
                    </nav>
                </section>
                <section id="header" className="headerNoPadding" />					
            </div>
        )
    }
}

export default Header