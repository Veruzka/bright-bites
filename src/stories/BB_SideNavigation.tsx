/*import React from 'react';
import { Link } from 'react-router-dom'; // Optional: For internal navigation
import ButtonIcon from './ButtonIcon'; // Adjust the import path as necessary
import './sidenavigation.css'; // CSS file for styling
import { Hexagon } from "phosphor-react"; 

const SideNavigation = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__logo">
        <Hexagon size={48} weight='thin' />
      </div>
      <div className="side-nav__buttons">
        <Link to="/home">
          <ButtonIcon icon="House" tooltipText="Homepage" />
        </Link>
        <Link to="/profile">
          <ButtonIcon icon="User" tooltipText="Profile" />
        </Link>
        <Link to="/settings">
          <ButtonIcon icon="Gear" tooltipText="Settings" />
        </Link>
        <Link to="/logout">
          <ButtonIcon icon="SignOut" tooltipText="Logout" />
        </Link>
      </div>
    </div>
  );
};

export default SideNavigation;*/

import React from 'react';
import { Link } from 'react-router-dom'; // Optional: For internal navigation
import IconButton from './BB_IconButton'; // Adjust the import path as necessary
import './bb_sidenavigation.css'; // CSS file for styling
import { Hexagon } from "phosphor-react"; 

const SideNavigation = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__logo">
        <Hexagon size={48} weight='thin' />
      </div>
      <div className="side-nav__buttons">
      
          <IconButton icon="House" tooltipText="Homepage" />
     
      
          <IconButton icon="User" tooltipText="Profile" />
      
     
          <IconButton icon="Gear" tooltipText="Settings" />
    
       
          <IconButton icon="SignOut" tooltipText="Logout" />
      
      </div>
    </div>
  );
};

export default SideNavigation;
