import React from 'react';
import propertyApplicants from '../../assets/Images/logo.png';
import classes from './Logo.css';
const logo=(props)=>(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={propertyApplicants} alt="LOGO"/>
    </div> 
);
export default logo;