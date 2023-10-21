import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Footer from "./Footer";

const Details = () => {
  const { id } = useParams();
  const [moviedata, setmoviedata] = useState({});

  useEffect(() => {
    const docRef = doc(db, "TamilMovies", id);
    const moviedetails = getDoc(docRef);
    moviedetails.then((res) => setmoviedata(res.data()));
  }, [id]);

  return (
    <container>
      {
        <div className="moviedetails">
          <div className="img">
            <img src={moviedata.img} alt="" />
          </div>
          <div className="title">
            <img src={moviedata.title} alt="" />
            <p>
              {" "}
              {moviedata.time
                ? moviedata.time
                : "2012 . 2h 39m .Tamil .U/A 13+"}
            </p>
            <h2>
              {moviedata.discerption
                ? moviedata.discerption
                : "kids | Animation | Fantacy"}
            </h2>
            <div className="subscribebutton">
              <button>
                <AiFillCaretRight />
                Subscribe to watch
              </button>
              <div id="plus">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </container>
  );
};

export default Details;
