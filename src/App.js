import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --------------------components------------------
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        {/* ---------------This is the Home page----------------------- */}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
