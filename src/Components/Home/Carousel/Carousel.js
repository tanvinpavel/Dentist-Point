import React from "react";
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item parent active">
            <img src="https://i.ibb.co/TWVBxtq/slider-3.jpg" className="d-block w-100 img-resize black-overlay" alt="..." />
            <div className="carousel-caption mb-3 d-none d-md-block">
              <h1>Welcome to a Family</h1>
              <p>
              Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing.
              </p>
            </div>
          </div>
          <div className="carousel-item parent">
            <img src="https://i.ibb.co/5FZfLyr/Interior-view-of-operating-room-in-hospital.jpg" className="d-block w-100 img-resize black-overlay" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              <h1>Request your appointment <br /> and start your smile makeover!</h1>
            </div>
          </div>
          <div className="carousel-item parent">
            <img src="https://i.ibb.co/C7LGrbh/slider-2.jpg" className="d-block w-100 img-resize black-overlay" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              <h1>Experienced Dentist</h1>
              <p>
                Dr. Harrie believes in providing her patients with more than just world class dental care.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
