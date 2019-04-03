import React from 'react';
import Radium from 'radium';

const searchbar = (props) => {

    return(
        <div className="form-group pull-right">
            <input type="text" className="search form-control col-md-8 offset-2" placeholder="Search for plant" />
        </div>
    )
}

export default searchbar;
