import React from 'react';
import classes from './Footer.css';
const footer = (props) => (
    <header className={[classes.Footer, classes.MobileOnly].join(' ')}>
        <p>AGB • Datenschutz • Impressum</p>
    </header>
);
export default footer;  