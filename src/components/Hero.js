import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import ej1 from '../assets/Comp 1/portada Facebook_00000.jpg'
import ej2 from '../assets/Comp 1/2_00000.jpg'
import ej3 from '../assets/Comp 1/3_00000.jpg'
import { gsap } from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);  

const Hero = () => {

    useEffect(() => {
        const carousel = document.querySelectorAll('.carousel')
        gsap.from(carousel, {opacity: 0, x: +100, duration: 1, stagger: 0.3});
    }, [])

    return (
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ej1}
                alt="First slide"
                />
              {/*  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ej2}
                    alt="Second slide"
                />
               {/* <Carousel.Caption> <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ej3}
                    alt="Third slide"
                />
            {/*    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero

