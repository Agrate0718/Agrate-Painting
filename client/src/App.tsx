import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import AllArtworks from "./components/Pages/AllArtworks";
import LandingPage from "./components/Pages/LandingPage";
import LoginPage from "./components/Pages/LoginPage";
import NavBar from "./components/Partials/NavBar";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Footer from "./components/Partials/Footer";
import CartPage from "./components/Pages/CartPage";

export default function App() {
  // interface currentUser{
  //   [currentUser: string]:any;
  // }
  // State
  // const [currentUser, setCurrentUser] = useState<{ token: any }>({
  //   token: null,
  // });

  const [currentUser, setCurrentUser] = useState<String | null>(null);

  // Hooks
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem("jwt");
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token));
    } else {
      setCurrentUser(null);
    }
  }, []); // happen only once

  // Handlers
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem("jwt")) {
      // if so, delete it
      localStorage.removeItem("jwt");
      // set the user in the App state to be null
      setCurrentUser(null);
    }
  };

  return (
    <Router>
      <div className="">
        <header className=" py-9">
          <NavBar currentUser={currentUser} handleLogout={handleLogout} />
        </header>
        <main className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/AllArt" element={<AllArtworks />} />

            <Route path="/About" element={<AboutPage />} />

            <Route
              path="/Login"
              element={
                <LoginPage
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />

            <Route path="/Cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
