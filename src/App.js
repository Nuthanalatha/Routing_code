import logo from "./logo.svg";
import "./App.css";
import Home from "./component/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/about/About";
import NavBar from "./component/navbar/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
