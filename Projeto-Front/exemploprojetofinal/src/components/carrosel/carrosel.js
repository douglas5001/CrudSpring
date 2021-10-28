import React from "react";

import { Carousel, Container } from 'react-materialize';

import sorv from '../images/sorv.jpg'
import sorv2 from '../images/sorv2.jpeg'


const Carrosel = () => (


    <Container>
        <Carousel>
            <div class="carousel carousel-slider">
                <a class="carousel-item" href="#one!">{
                    <img src={sorv} width="600px" />
                }</a>
                <a class="carousel-item" href="#two!">{
                    <img src={sorv2} />
                }</a>
                <a class="carousel-item" href="#three!"></a>
                <a class="carousel-item" href="#four!">
                    <img src={"https://lorempixel.com/800/400/food/3"} className="" />
                </a>
            </div>
        </Carousel>
    </Container>
);