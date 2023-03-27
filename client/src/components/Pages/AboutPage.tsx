import img from "./imgs/Pfpa-Art-Site.jpg";

export default function AboutPage() {
  return (
    <div>
      <div className="flex justify-end mb-10 z-10 ">
        <div className="w-[560px] h-[447px] ml-[40px]  border-2 border-red-500">
          Extra info div
        </div>
        <img src={img} alt="chicken" className="  h-screen" />
        <div className="w-1/3 flex items-center justify-center bg-black text-white">
          <div className="">Extra info div</div>
        </div>
      </div>
    </div>
  );
}
