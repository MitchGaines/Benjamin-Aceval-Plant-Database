import React from 'react';
import './Species.css';
import SpeciesCarousel from './SpeciesCarousel/SpeciesCarousel';

const species = (props) => {

    const common_name_style = props.common_name ? {} : {display: 'none'};
    const family_name_style = props.family_name ? {} : {display: 'none'};
    const flowering_season_style = props.flowering_season ? {} : {display: 'none'};
    const bird_call_style = props.bird_call ? {} : {display: 'none'};
    const gps_style = props.gps ? {} : {display: 'none'};
    const description_style = props.description ? {} : {display: 'none'};

    return(
        <div className="Plant col-md-4 col-sm-6 col-xs-12 align-top">
            <div className="card bg-light">
                <SpeciesCarousel imgs={props.images} />
                <div className="card-body">
                    <h5 className="card-title"><i>{props.scientific_name}</i></h5>
                    <table className="table table-attributes">
                        <tbody>
                            <tr style={common_name_style}>
                                <td><b>Nombres Vernáculos: </b></td>
                                <td>{props.common_name}</td>
                            </tr>
                            <tr style={family_name_style}>
                                <td><b>Familia: </b></td>
                                <td>{props.family_name}</td>
                            </tr>
                            <tr style={bird_call_style}>
                                <td><b>Canto de Pajarpo: </b></td>
                                <td>{props.bird_call}</td>
                            </tr>

                            <tr style={flowering_season_style}>
                                <td><b>Temporada de Floración: </b></td>
                                <td>{props.flowering_season}</td>
                            </tr>
                            <tr style={gps_style}>
                                <td><b>Ubicación Encontrada: </b></td>
                                <td>{props.gps}</td>
                            </tr>
                            <tr style={description_style}>
                                <td><b>Descripción: </b></td>
                                <td>{props.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default species;