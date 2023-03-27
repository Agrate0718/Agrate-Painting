import img from "./imgs/Pfpa-Art-Site.jpg";

export default function AboutPage() {
  return (
    <div>
      <div className="flex justify-end items-center ">
        <div className=" w-[560px] h-[447px] ml-[40px] right-[1200p] left-10  shadow-xl  relative  border- border-red-500 lg:bg-white sm:bg-black">
          <h2 className=" m-10  text-5xl font-bold font-serif">About Me</h2>
          <p className="text-2xl pt-10 px-5 text-left font-sans">
            I'm Shaily Agrate an Esteemed artist coming strong out of
            Leesburg,FL {"\n"}I have a lot of love and passion poured into my
            peices of art{"\n"}I hope that you find something you like
          </p>
        </div>
        <img src={img} alt="chicken" className="  h-screen " />
        <div className="w-1/3 h-screen flex items-center justify-center bg-[#2f0a0a] text-white">
          <div className="text-4xl p-10">
            Something else can go here Mabye Pics,Email,Hobbies....
          </div>
        </div>
      </div>
    </div>
  );
}
