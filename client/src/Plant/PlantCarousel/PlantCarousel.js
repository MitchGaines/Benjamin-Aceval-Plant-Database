import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const plantcarousel = (props) => {

    const plant_images = props.imgs.map((image) => {
        return <Carousel.Item>
            <img className="card-img-top d-block w-100" src={image} />
        </Carousel.Item>});

    return (<Carousel interval={null}>
        {plant_images}
    </Carousel>);
}

export default plantcarousel;
