import Carousel from "../Partials/Carousel";
import Footer from "../Partials/Footer";

export default function LandingPage() {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold ">AGRATE PAINTINGS</h1>
      <h1 className="text-xl">Featured Artworks</h1>
      <h1>View all here</h1>
      <Carousel />
      <div className="flex  items-center justify-center my-20">
        <div className=" bg-rd-500 text-4xl ">
          Welcome to Agrate Paintings. This Site host all of Shaily Agrate's
          fantastic artwork
        </div>
      </div>
      <Footer />
    </div>
  );
}
