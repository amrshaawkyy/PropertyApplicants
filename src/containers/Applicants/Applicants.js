import React, { Component } from 'react';
import Applicant from '../../components/Applicant/Applicant';
import Aux from '../../hoc/AUX1/Aux1';
import classes from './Applicants.css';
import Informationbar from '../../components/Navigation/Informationbar/Informationbar';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import { withRouter } from "react-router";
import axios from '../../axios-order';
class Applicants extends Component {
    state = {
        filtered: this.props.applicants
    }
    handleSearchChange = (event) => {
        this.props.history.push(axios.defaults.baseURL+'/'+'?search=' + event.target.value );
        if (event.target.value === '')
            this.props.history.push('/Applicants');
        event.preventDefault();
        this.setState({ filtered: this.props.applicants });
        const value = event.target.value;
        const lowercasedValue = value.toLowerCase();
        this.setState(prevState => {
            const filtered = prevState.filtered.filter(el =>
                el.FirstName.toLowerCase().includes(lowercasedValue) || el.LastName.toLowerCase().includes(lowercasedValue) || el.Email.toLowerCase().includes(lowercasedValue)
            );
            return { filtered };
        });
    };
    render() {
        const { filtered } = this.state
        let applicantsTransformed = Object.keys(filtered)
            .map(igKey => {
                return [...Array(filtered[igKey])].map((_, i) => {
                    return filtered[igKey]
                });
            }).reduce((arr, el) => {
                return arr.concat(el)
            }, []);
        return (
            <Aux>
                <div className={classes.Informationbar}>
                    <Informationbar applicants={applicantsTransformed} />
                </div>
                <div className={classes.Search}>
                    <SearchInput changed={this.handleSearchChange} placeholder="Search for applicant" />
                    <div className={classes.ex}>
                        <select>
                            <option value="" disabled selected>Bids</option>
                            <option>Lowest To Highest </option>
                            <option>Highest To Lowest </option>
                        </select>
                        <select>
                            <option value="" disabled selected>Status</option>
                            <option>Appointment</option>
                            <option>Viewed</option>
                            <option>Interested</option>
                            <option>Offer Accepted</option>
                        </select>
                    </div>
                </div >
                <div className={classes.Applicants}>
                    <h4>Appointment Set ({applicantsTransformed.filter(applicant => applicant.Status === "Appointment_Set").length})</h4>
                    <ul className={classes.UL}>
                        {
                            applicantsTransformed.map(x => {
                                var randomColor = require('randomcolor');
                                var randColor = randomColor();
                                if (x.colorLoaded == null)
                                    x.colorLoaded = randColor;
                                return x.Status === 'Appointment_Set' ? <li key={x.id}><Applicant randColor={x.colorLoaded} applicant={x} status="APPOINTMENT" /></li> : null
                            })
                        }
                    </ul>
                    <h4>Property Viewed ({applicantsTransformed.filter(applicant => applicant.Status === "Property_Viewed").length})</h4>
                    <ul className={classes.UL}>
                        {
                            applicantsTransformed.map(x => {
                                var randomColor = require('randomcolor');
                                var randColor = randomColor();
                                if (x.colorLoaded == null)
                                    x.colorLoaded = randColor;
                                return x.Status === 'Property_Viewed' ? <li key={x.id}><Applicant randColor={x.colorLoaded} applicant={x} status="VIEWED" /></li> : null
                            })
                        }
                    </ul>
                    <h4>Interested ({applicantsTransformed.filter(applicant => applicant.Status === "Interested").length})</h4>
                    <ul className={classes.UL}>
                        {
                            applicantsTransformed.map(x => {
                                var randomColor = require('randomcolor');
                                var randColor = randomColor();
                                if (x.colorLoaded == null)
                                    x.colorLoaded = randColor;
                                return x.Status === 'Interested' ? <li key={x.id}><Applicant randColor={x.colorLoaded} applicant={x} status="INTERESTED" /></li> : null
                            })
                        }
                    </ul>
                    <h4>Offer Accepted ({applicantsTransformed.filter(applicant => applicant.Status === "Offer_Accepted").length})</h4>
                    <ul className={classes.UL}>
                        {
                            applicantsTransformed.map(x => {
                                var randomColor = require('randomcolor');
                                var randColor = randomColor();
                                if (x.colorLoaded == null)
                                    x.colorLoaded = randColor;
                                return x.Status === 'Offer_Accepted' ? <li key={x.id}><Applicant randColor={x.colorLoaded} applicant={x} status="ACCEPTED" /></li> : null
                            })
                        }
                    </ul>
                </div>
            </Aux >
        );
    }
}
export default withRouter(Applicants);