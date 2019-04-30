import React from 'react';

const searchbar = (props) => {

    return(
        <div className="form-group">
            <input type="text" onChange={props.changed} className="search form-control col-sm-8 offset-2 d-none d-sm-block" placeholder="Buscar una especie" />
            <input type="text" onChange={props.changed} className="search form-control col-xs-12 d-block d-sm-none" placeholder="Buscar una especie" />
        </div>
    )
}

export default searchbar;
