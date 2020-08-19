import React from 'react';
import classes from './NavigationItems.css';
import active from '../../../assets/Images/active.png';
import ContactSupport from '../../../assets/Images/ContactSupport.png';
import power from '../../../assets/Images/power.png';
import user from '../../../assets/Images/user.png';
import Vector from '../../../assets/Images/Vector.png';
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <img src={Vector} alt="LOGO"/>
        <img src={ContactSupport} alt="LOGO"/>
        <img className={classes.msgs} src={active} alt="LOGO"/>
        <img src={user} alt="LOGO"/>
        <img src={power} alt="LOGO"/>
    </ul>
);
export default navigationItems;