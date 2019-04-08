import React from 'react';
import Radium from 'radium';

const searchbar = (props) => {

    return(
        <div className="form-group">
            <input type="text" onChange={props.changed} className="search form-control col-sm-8 offset-2 d-none d-sm-block" placeholder="Search for plant" />
            <input type="text" onChange={props.changed} className="search form-control col-xs-12 d-block d-sm-none" placeholder="Search for plant" />
        </div>
    )
}

export default searchbar;
