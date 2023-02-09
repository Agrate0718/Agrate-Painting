import ArtWorkCard from "./ArtworkCard";

export default function Artlist(artworks: any) {
  const artworkCardComponents = artworks.map((artwork: any) => {
    return <ArtWorkCard artwork={artwork} />;
  });
  return <div>{artworkCardComponents}</div>;
}
