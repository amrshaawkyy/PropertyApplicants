import React, { Component } from "react";
import Aux from '../../hoc/AUX1/Aux1';
import Applicants from '../Applicants/Applicants';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import data from '../../data.json';
class ApplicantsView extends Component {
    state = {
        applicantsDate: null,
        error: false
    }
    componentDidMount() {
        // let newdata;
        // axios.get('https://my.api.mockaroo.com/applicantsdata.json?key=347576c0').then(response => {
        //     newdata = response.data;
        //     let floors = newdata;
        //     for (let index = 0; index < floors.length; index++) {
        //         floors[index]["colorLoaded"] = null
        //     }
        //     this.setState({ applicantsDate: floors });
        // }).catch(error => {
        //     this.setState({ error: true });
        // });
        // to get data using api but in-case we make more than 200 request per day so i did
        //use this down code to read from json 

        let floors = data;
        for (let index = 0; index < floors.length; index++) {
            floors[index]["colorLoaded"] = null
        }
        this.setState({ applicantsDate: floors });
    }
    render() {
        return (
            <Aux>
                {this.state.applicantsDate ? <Applicants applicants={this.state.applicantsDate} /> : <Spinner />}
            </Aux>
        );
    }
}
export default withErrorHandler(ApplicantsView, axios);