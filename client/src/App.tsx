import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import AllArtworks from "./components/Pages/AllArtworks";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import NavBar from "./components/Partials/NavBar";

export default function App() {
  return (
    <Router>
      <div className="">
        <header className=" py-9">
          <NavBar />
        </header>
        <main className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/AllArt" element={<AllArtworks />} />

            <Route path="/About" element={<AboutPage />} />

            <Route path="/Login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
