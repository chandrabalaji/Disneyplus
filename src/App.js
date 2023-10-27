import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import UserLogin from "./Components/UserLogin";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Search from "./Components/Search";
import { useState } from "react";
import { Ring } from "@uiball/loaders";

function App() {
  const [loding, setloding] = useState(true);
  setTimeout(() => {
    setloding(false);
  }, 1200);

  return !loding ? (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserLogin" element={<UserLogin />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Home/:id" element={<Details />}></Route>
        <Route path="/:id" element={<Details />}></Route>
        <Route path="/search">
          <Route index element={<Search />} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  ) : (
    <div className="loader">
      <Ring size={50} lineWeight={5} speed={2} color="blue" />
    </div>
  );
}

export default App;
