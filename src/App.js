import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Booking from "./components/Pages/Booking";
import Footer from "./components/Footer";
import "./App.css";
import About from "./components/About";
import { Outlet } from "react-router-dom/dist";

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="booking" element={<Booking />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
