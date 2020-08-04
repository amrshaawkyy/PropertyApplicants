import React from 'react';
import styled from 'styled-components';
import classes from './Applicant.css';
const applicant = (props) => {
    function ColorLuminance(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }
    var d = new Date(props.applicant.DateOfAction),
        dformat = [
            d.getDate(),
            d.toLocaleString('default', { month: 'long' }),].join(' ') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            ].join(':');
    let Bid = null;
    if (parseInt(props.applicant.Bid.replace(/\€/g, '')) > 0) {
        Bid = "BID " + props.applicant.Bid;
    }
    const Title = styled.p`
         &:before {
        background: ${props.randColor};
        color: ${ColorLuminance(props.randColor, -0.5)};
         }
        `;
    return (
        <div className={classes.Card}>
            <Title style={{ fontWeight: 'bold' }} data-letters={props.applicant.FirstName.charAt(0) + props.applicant.LastName.charAt(0)} />
            <p style={{ fontWeight: 'bold' }}>{props.applicant.FirstName + " " + props.applicant.LastName}</p>
            <p>{props.applicant.PhoneNumber}</p>
            <p>{props.applicant.Email}</p>
            <p className={classes.ActionTime}><span>{props.status + " " + dformat}</span></p>
            <p className={classes.Bid}>{Bid ? <span>{Bid}</span> : null}</p>
        </div>
    );
}
export default applicant;