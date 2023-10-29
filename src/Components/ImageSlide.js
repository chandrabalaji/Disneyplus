import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

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
      <Slider {...setting}>
        <div className="slide">
          <video
            type="video/mp4"
            className="video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/Bigg_boss.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/4031/1604031-t-3d7aa17822a9"
                alt=""
              />
            </h1>
            <h3>{`${2023} . ${"Tamil"}  ${"U/16"} `}</h3>
            <p className="overlay-para">
              one of the most antipulated gaming show is back get ready{" "}
            </p>
            <h5>Reality Show | Entertainment</h5>
            <h5 id="phone-dis"> {`${2023} | ${"Tamil"}`} | Reality | Celebrities </h5>
            <div className="button">
              <button id="btn">
                <div id="play-btn">
                  <AiFillCaretRight />
                </div>
                <div>
                  Watch <span id="free-btn"> Now</span>
                </div>
              </button>
              <div className="slick-plus">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <video
            type="video/mp4"
            className="video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/Ready_Steady.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>
              {" "}
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/2885/1592885-t-a57e7108dc55"
                alt=""
              />{" "}
            </h1>
            <h3>{`${2023} . ${"Tamil"}  ${"U/16"} `}</h3>
            <p className="overlay-para">
              one of the most antipulated gaming show is back get ready{" "}
            </p>
            <h5>Reality Show | Entertainment</h5>
            <h5 id="phone-dis"> {`${2023} season2 | ${"Tamil"}`} | Reality | Competation </h5>
            <div className="button">
            <button id="btn">
                <div id="play-btn">
                  <AiFillCaretRight />
                </div>
                <div>
                  Watch <span id="free-btn"> Now</span>
                </div>
              </button>
              <div className="slick-plus">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <video
            type="video/mp4"
            className="video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/startMusic.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h1>
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/4515/1494515-t-66b3e61eaeeb"
                alt=""
              />
            </h1>
            <h3>{`${2023} . ${"Tamil"}   ${"U/16"} `}</h3>
            <p className="overlay-para">
              one of the most antipulated gaming show is back get ready
            </p>
            <h5>Reality| Entertainment</h5>
            <h5 id="phone-dis"> {`${2023} | ${"Tamil"}`} | Reality |Musicals| Celebrities </h5>
            <div className="button">
            <button id="btn">
                <div id="play-btn">
                  <AiFillCaretRight />
                </div>
                <div>
                  Watch <span id="free-btn"> Now</span>
                </div>
              </button>
              <div className="slick-plus">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </main>
  );
};

export default ImageSlide;
