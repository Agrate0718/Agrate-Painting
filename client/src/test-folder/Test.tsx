import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Artlist from "../components/Partials/ArtList";
import ArtWorkCard from "../components/Partials/ArtworkCard";
let x = 0;
export default function Test() {
  console.log("test page");
  const server = process.env.REACT_APP_SERVER_URL;

  // Artwork from the backend
  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState("");
  // State for error message from backend
  const [errorMessage, setErrorMessage] = useState("");

  useMemo(() => {
    console.log("useEffect happened");
    const getArtworks = async () => {
      console.log("getArtworks function called");
      try {
        console.log("try block called");
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/artworks/get`
        );
        // const filteredArtworks = response.data.filter((course: any) => {
        //   return course.title.toLowerCase().includes(search.toLowerCase());
        // });
        const artData = response.data.artworks;
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
  }, []); // empty array makes useEffect run only once
  console.log("artworks:", artworks);
  const artworkCardComponents = artworks.map((artwork: any) => {
    return <ArtWorkCard artwork={artwork} />;
  });

  return (
    <div>
      <p>Test h Page </p>
      {artworkCardComponents};<p>{errorMessage}</p>
    </div>
  );
}
