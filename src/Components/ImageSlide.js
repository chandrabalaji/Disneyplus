import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlinePlus } from "react-icons/ai";

const ImageSlide = () => {
  let setting = {
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3900,
    cssEase: "linear",
  };

  return (
    <main>
      <Slider {...setting} >
        <div className="slide">
          <video type="video/mp4" className="video" autoPlay muted loop playsInline>
            <source src="/images/Bigg_boss.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>BIGG BOSS 7</h1>
            <p>{`${2023} . ${"Tamil"}  ${"U/16"} `}</p>
            <p>one of the most antipulated gaming show is back get ready </p>
            <div className="button">
              <button>Watch For Free</button>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="slide">
          <video type="video/mp4" className="video" autoPlay muted loop playsInline>
            <source src="/images/Ready_Steady.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>Ready Steady po </h1>
            <p>{`${2023} . ${"Tamil"}  ${"U/16"} `}</p>
            <p>one of the most antipulated gaming show is back get ready </p>
            <div className="button">
              <button>Watch For Free</button>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="slide">
          <video type="video/mp4" className="video" autoPlay muted loop playsInline>
            <source src='/images/Ready_Steady.mp4' type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>Start Music 4</h1>
            <p>{`${2023} . ${"Tamil"}   ${"U/16"} `}</p>
            <p>one of the most antipulated gaming show is back get ready </p>
            <div className="button">
              <button>Watch For Free</button>
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </Slider>
    </main>
  );
};

export default ImageSlide;
