import "./App.css";

import Navbar from "./Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/HomePage/Home";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
