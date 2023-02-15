import Carousel from "../Partials/Carousel";

export default function LandingPage() {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold ">AGRATE PAINTINGS</h1>
      <h1 className="text-xl">Featured Artworks</h1>
      <h1>View all here</h1>
      <Carousel />
      <div className="flex  items-center justify-center my-20">
        <div className="  grid gap-5 w-10/12  lg:grid-cols-3 md:grid-cols-2  place-items-center">
          greetings go here
        </div>
      </div>
    </div>
  );
}
