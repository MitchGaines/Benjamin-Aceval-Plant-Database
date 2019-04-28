import React from 'react';
import './Plant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlantCarousel from './PlantCarousel/PlantCarousel';

const plant = (props) => {
    return(
        <div className="Plant col-md-4 col-sm-6 col-xs-12 align-top">
            <div className="card bg-light">
                <PlantCarousel imgs={props.images} />
                <div className="card-body">
                    <h5 className="card-title"><i>{props.scientific_name}</i></h5>
                    <table className="table table-attributes">
                        <tbody>
                            <tr>
                                <td><b>Nombres Vernáculos: </b></td>
                                <td>{props.common_name}</td>
                            </tr>
                            <tr>
                                <td><b>Familia: </b></td>
                                <td>{props.family_name}</td>
                            </tr>
                            <tr>
                                <td><b>Temporada de Floración: </b></td>
                                <td>{props.flowering_season}</td>
                            </tr>
                            <tr>
                                <td><b>Ubicación Encontrada: </b></td>
                                <td>{props.gps}</td>
                            </tr>
                            <tr>
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

export default plant;