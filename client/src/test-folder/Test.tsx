import axios from "axios";
import { useEffect, useState } from "react";
import Artlist from "../components/Partials/ArtList";

export default function Test() {
  console.log("test page");
  const server = process.env.REACT_APP_SERVER_URL;

  // Artwork from the backend
  const [artworks, setArtworks] = useState([]);
  // State for error message from backend
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("useEffect happened");
    const getArtworks = async () => {
      console.log("getArtworks function called");
      try {
        console.log("try block called");
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/artworks/get`
        );
        const artData = response.data;
        console.log("response:", response);
        setArtworks(artData);
      } catch (err: any) {
        console.warn(err);
        if (err.response) {
          setErrorMessage(err.response.data.message);
        }
      }
    };
    getArtworks();
  }); // fire on page load
  console.log("artworks:", artworks);

  return (
    <div>
      <p>Test h Page</p>
      <Artlist artworks={artworks} />;<p>{errorMessage}</p>
    </div>
  );
}
