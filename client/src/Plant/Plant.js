import React from 'react';
import './Plant.css';
import Radium from 'radium';

const plant = (props) => {
    return(
        <div className="Plant">
            <h6>{props.index} | {props.name}</h6>
        </div>
    )
}

export default Radium(plant);