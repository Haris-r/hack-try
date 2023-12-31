// import logo from './logo.svg';
import React from "react"; //Added userState for search
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from './pages/HomePage/Home.jsx'
import Products from "./pages/Products/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";
// import Pill from "./components/Pill/Pill.jsx";
import Slider from "./components/Slider/Slider.jsx";

//CSS
import "./pages/FAQ/FAQ.jsx";
import "./App.scss";

// Search bar and Icons
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route> */}
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
