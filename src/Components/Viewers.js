import React from "react";

const Viewers = () => {
  return (
    <section className="viewers">
      <div className="view">
        <img src="/images/viewers-disney.png" alt="" />
        <video
          src="/videos/disney.mp4"
          type="video/mp4"
          autoPlay
          loop
        ></video>
      </div>
      <div className="view">
        <img src="/images/viewers-marvel.png" alt="" />
        <video src="/videos/marvel.mp4" type="video/mp4" autoPlay loop></video>
      </div>
      <div className="view">
        <img src="/images/viewers-national.png" alt="" />
        <video
          src="/videos/national-geographic.mp4"
          type="video/mp4"
          autoPlay
          loop
        ></video>
      </div>
      <div className="view">
        <img src="/images/viewers-pixar.png" alt="" />
        <video src="/videos/pixar.mp4" type="video/mp4" autoPlay loop></video>
      </div>
      <div className="view">
        <img src="/images/viewers-starwars.png" alt="" />
        <video
          src="/videos/star-wars.mp4"
          type="video/mp4"
          autoPlay
          loop
        ></video>
      </div>
    </section>
  );
};

export default Viewers;
