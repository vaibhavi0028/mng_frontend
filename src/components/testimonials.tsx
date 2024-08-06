"use client";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import "@/styles/testimonials.css";

const Testimonials: React.FC = () => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  useEffect(() => {
    const slideElement = document.querySelector(".slide");

    const handleMouseDown = () => {
      if (slideElement) {
        slideElement.classList.add("grabbing");
        slideElement.classList.remove("grab");
      }
    };

    const handleMouseUp = () => {
      if (slideElement) {
        slideElement.classList.remove("grabbing");
        slideElement.classList.add("grab");
      }
    };

    if (slideElement) {
      slideElement.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (slideElement) {
        slideElement.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  useEffect(() => {
    const slideElement = document.querySelector(".slide");
    if (slideElement) {
      if (hoveredSlide === 1) {
        slideElement.classList.add("grab");
        slideElement.classList.remove("grabbing");
      } else {
        slideElement.classList.remove("grab", "grabbing");
      }
    }
  }, [hoveredSlide]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          backgroundColor: "#F9FDFF",
          borderRadius: "10px",
        }}
      >
        <ul style={{ marginTop: "50px", display: "flex", gap: "40px", marginLeft: "31.5%" }}>
          {dots}
        </ul>
      </div>
    )
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots: React.ReactNode) => (
            <div
              style={{
                backgroundColor: "#F9FDFF",
                borderRadius: "10px",
              }}
            >
              <ul style={{ marginTop: "2.5rem", display: "flex", gap: "40px", marginLeft: "13%" }}>
                {dots}
              </ul>
            </div>
          )
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          backgroundColor: "#F9FDFF",
          borderRadius: "10px",
        }}
      >
        <ul style={{ marginTop: "50px", display: "flex", gap: "40px", marginLeft: "38%" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "53px",
          height: "7px",
          borderRadius: "6rem",
          backgroundColor: hoveredDot === i ? "#204EA5" : "#DBE7FF",
          transition: "background-color 0.1s ease"
        }}
        onMouseOver={() => setHoveredDot(i)}
        onMouseOut={() => setHoveredDot(null)}
      />
    )
  };

  return (
    <div className="testim">
      <h1>TESTIMONIALS</h1>
      <p className="tp">Our Patients Says</p>
      <div className="carousel">
        <Image src="/quote1.png" alt="Quote 1" width={50} height={50} className="q1" />
        <div className="slide" onMouseOver={() => setHoveredSlide(1)} onMouseOut={() => setHoveredSlide(null)}>
          <Slider {...settings}>
            <div className="testimonial-slide">
              <blockquote>
                <p className="tep">
                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”
                </p>
              </blockquote>
              <div className="testimonial-author">
                <Image src="/img1.png" alt="Joshua Jones" width={50} height={50} />
                <div className="tif">
                  <h3>Joshua Jones</h3>
                  <p className="teep">Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-slide">
              <blockquote>
                <p className="tep">
                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”
                </p>
              </blockquote>
              <div className="testimonial-author">
                <Image src="/img2.png" alt="Paula Mora" width={50} height={50} />
                <div className="tif">
                  <h3>Paula Mora</h3>
                  <p className="teep">Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-slide">
              <blockquote>
                <p className="tep">
                  “Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry”
                </p>
              </blockquote>
              <div className="testimonial-author">
                <Image src="/img3.png" alt="Rhonda Rhodes" width={50} height={50} />
                <div className="tif">
                  <h3>Rhonda Rhodes</h3>
                  <p className="teep">Business Manager</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <Image src="/quote2.png" alt="Quote 2" width={50} height={50} className="q2" />
      </div>
    </div>
  );
};

export default Testimonials;
