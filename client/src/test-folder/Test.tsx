import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  console.log("test page");
  const server = process.env.REACT_APP_SERVER_URL;
  //   const allArtworks =
  //   console.log(allArtworks);

  // Artwork from the backend
  const [artworks, setArtworks] = useState([]);
  // State for error message from backend
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getArtworks = async () => {
      try {
        const response = await axios.get(`${server}/artworks/get`);
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
  }, []);
  console.log("artworks:", artworks);
  return (
    <div>
      <p>Test h Page</p>
    </div>
  );
}
