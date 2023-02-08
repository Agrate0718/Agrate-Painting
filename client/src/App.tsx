import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import NavBar from "./components/Partials/NavBar";
import Test from "./test-folder/Test";

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

            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
