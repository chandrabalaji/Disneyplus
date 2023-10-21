import React from "react";
import ImageSlide from "./ImageSlide";
import Recommended from "./Recommended";
import LatestReleases from "./LatestReleases";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase";
import { setmovies } from "../features/movies/movieSlice";
import { collection, getDocs } from "firebase/firestore";
import StarVijay from "./StarVijay";
import Bestkids from "./Bestkids";
import Old from "./Old";
import Viewers from "./Viewers";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let colRef = collection(db, "TamilMovies");
    let movie = [];

    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          movie = [...movie, { id: doc.id, ...doc.data() }];
        });
        dispatch(
          setmovies({
            allmovies:movie,
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main>
     
      {/* <ImageSlide /> */}
      <Recommended />
      <LatestReleases />
      <StarVijay />
      <Bestkids />
      <Viewers />
      <Old />
      <Footer />

    </main>
  );
};

export default Home;
