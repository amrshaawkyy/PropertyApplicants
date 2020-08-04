import React from 'react';
import classes from './Informationbar.css';
import Arrow from '../../UI/Arrow/Arrow';
import ApplicantsRecords from '../ApplicantsRecords/ApplicantsRecords';
const informationBar = (props) => (
    <header className={classes.Informationbar}>
        <Arrow className={classes.Arrows} angle={270} length={12} width={40} to={'/'} filled={false} color="#80868B"/>
        <div className={classes.Text}>
            <h3>Applicants</h3>
        </div>
        <nav className={classes.DestopOnly}>
            <ApplicantsRecords applicants={props.applicants}/>
        </nav>
    </header>
);
export default informationBar;  