import React, { Component } from 'react';
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import './Carousel.scss';

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }


    getAllPaintings = () => {
        axios.get('http://localhost:5000/api/paintings')
        .then(res => {
            this.setState({ images: res.data });
        })
        .catch(err => {
            console.log(err)
        });
    };

    componentDidMount() {
        this.getAllPaintings();
    }

    render() {
        const { images } = this.state;

        return (
            <div>
                <h2>Carousel</h2>

                <div className="containerSlide">
                    <Slide {...properties}>
                        {images.map((image, key) => {
                            return(
                                <div className="item" key={key}>
                                    <h2>{image.title}</h2>
                                    <img src={image.imageUrl} />
                                </div>
                            )
                        })}
                    </Slide>
                </div>
            </div>
        )
    }
}
