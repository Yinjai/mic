import React from 'react';

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.sidebarClickHandler}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

export default DrawerToggleButton;

