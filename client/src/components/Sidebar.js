import React from 'react';
import Navigation from './Navigation';

const Sidebar = props => {
    let barClasses = ['sidebar'];
    if(props.show) {
        barClasses = 'sidebar open';
    }
    return (
        <nav className={barClasses}>
            <Navigation />
        </nav>
    )
        
}

export default Sidebar;