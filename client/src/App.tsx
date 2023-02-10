import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import NavBar from "./components/Partials/NavBar";
import AllArtworks from "./test-folder/AllArtworks";
import Test from "./test-folder/AllArtworks";

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}
