import React from 'react';
import Arrow from '@elsdoerfer/react-arrow';
import { Link } from 'react-router-dom';
import classes from './Arrow.css';
const renderArrow = props => (
    <Link to={props.to}><Arrow
        angle={props.angle}
        length={props.length}
        style={{
            width: props.width + 'px'
        }}
        arrowHeadFilled={props.filled}
        color={props.color}
        className={classes.Arrow}
        /></Link>
);
export default renderArrow;