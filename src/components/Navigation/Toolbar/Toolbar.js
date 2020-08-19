import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import active from '../../../assets/Images/active.png';
import { Link } from 'react-router-dom';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Link to='/'>
                <Logo /*height="80%"*/ />
            </Link>
        </div>
        <nav className={classes.DestopOnly}>
            <NavigationItems />
        </nav>
        <nav className={classes.MobileOnly}>
            <img src={active} alt="LOGO" />
        </nav>
    </header>
);
export default toolbar;  