import React from 'react';
import './Plant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import PlantCarousel from './PlantCarousel/PlantCarousel';

const plant = (props) => {
    return(
        <div className="Plant col-md-4 col-sm-6 col-xs-12 align-top">
            <div className="card bg-light">
                <PlantCarousel imgs={props.images} />
                <div className="card-body">
                    <h5 className="card-title">{props.scientific_name}</h5>
                    <table className="table table-attributes">
                        <tbody>
                            <tr>
                                <td><b>Common Name: </b></td>
                                <td>{props.common_name}</td>
                            </tr>
                            <tr>
                                <td><b>Family Name: </b></td>
                                <td>{props.family_name}</td>
                            </tr>
                            <tr>
                                <td><b>Flowering Season: </b></td>
                                <td>{props.flowering_season}</td>
                            </tr>
                            <tr>
                                <td><b>Location Found: </b></td>
                                <td>{props.gps}</td>
                            </tr>
                            <tr>
                                <td><b>Description: </b></td>
                                <td>{props.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faUserEdit} /> Edit</a>
                </div>
            </div>
        </div>
    )
}

export default plant;