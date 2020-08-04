import React from 'react';
import classes from './ApplicantsRecords.css';
const applicantsRecords = (props) => (
    <ul className={classes.NavigationItems}>
        <li>
            <p>{props.applicants.filter(applicant => applicant).length}</p>
            <p className={classes.InfoText}>Total</p>
        </li>
        <li>
            <p>{props.applicants.filter(applicant => applicant.Status === "Interested").length}</p>
            <p className={classes.InfoText}>New</p>
        </li>
        <li>
            <p>{props.applicants.filter(applicant => applicant.Status === "Property_Viewed").length}</p>
            <p className={classes.InfoText}>Viewed</p>
        </li>
        <li>
            <p>{props.applicants.filter(applicant => applicant.Status === "Appointment_Set").length}</p>
            <p className={classes.InfoText}>Appointment</p>
        </li>  <li>
            <p>{props.applicants.filter(applicant => (applicant.Status !== "Interested") && (applicant.Status !== "Property_Viewed") && (applicant.Status !== "Appointment_Set")).length}</p>
            <p className={classes.InfoText}>Others</p>
        </li>
    </ul>
);
export default applicantsRecords;