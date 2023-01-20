import React from 'react'
import "./ImgCarousel.css"
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Carousel } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import eceImg1 from "../../resources/images/departmental image/admission.jpg";
import eceImg2 from "../../resources/images/departmental image/CSE computer lab.jpg";
import eceImg3 from "../../resources/images/departmental image/winner of winter fest.jpg";
import eceImg4 from "../../resources/images/departmental image/farewell ceremony.jpg";


export default function ImgCarousel() {
  return <div className="imgCarousel">
    <div>
      <Carousel fade >
        <Carousel.Item >
          <img
            src={eceImg1}
            className={'d-block w-100'}
            alt={''}
          />
          <Carousel.Caption>
            <p>Admission Poster</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            src={eceImg2}
            alt={''}
            className={'d-block w-100'}
          />
          <Carousel.Caption>
            <p>Students are working in the computer lab</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            src={eceImg3}
            alt={''}
            className={'d-block w-100'}
          />
          <Carousel.Caption>
          <p>Winner of Winter Fest</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            src={eceImg4}
            alt={''}
            className={'d-block w-100'}
          />
          <Carousel.Caption>
          <p>Farewell Ceremony of 2022</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
}
