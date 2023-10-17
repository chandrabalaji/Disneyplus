import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import Header from "./Components/Header";
import UserLogin from "./Components/UserLogin";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserLogin" element={<UserLogin />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Home/:id" element={<Details />}></Route>
        <Route path="/search">
          <Route index element={<Search />} />
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
