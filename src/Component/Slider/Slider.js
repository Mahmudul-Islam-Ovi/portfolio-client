import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel className='mt-5'>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://free4kwallpapers.com/uploads/originals/2021/04/25/a-for-programmers-wallpaper.png"

            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp9109396.jpg"

            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp9109396.jpg"

            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;