import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import NavBar from "./components/Partials/NavBar";

export default function App() {
  return (
    <Router>
      <div className="">
        <header className=" py-9">
          <NavBar />
        </header>
        <main className="bg-green-500 relative">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
      {/* <footer className="border-4 mt-96 border-orange-800">footer</footer> */}
    </Router>
  );
}
