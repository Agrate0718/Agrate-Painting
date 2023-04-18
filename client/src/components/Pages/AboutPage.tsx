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

// export default function AboutPage() {
//   return (
//     <div className="h-[741px]">
//       <div className="w-full flex items-center justify-center w-full h-[741px]">
//         <div className="grid grid-cols-2 w-[1140px] ">
//           <div className="border-[20px] border-red-900 w-[456px] h-[642px] p-[20px] "></div>
//           <div className="pl-40 pt-20">
//             <p>About Me</p>
//             <p className="w-[500px] ">
//               Podcasting operational change management inside of workflows to
//               establish a framework. Taking seamless key performance indicators
//               offline to maximise the long tail. Keeping your eye on the ball
//               while performing a deep dive on the start-up mentality to derive
//               convergence on cross-platform integration. Objectively innovate
//               empowered manufactured products whereas parallel platforms.
//               Holisticly predominate extensible testing procedures for reliable
//               supply chains. Dramatically engage top-line web services vis-a-vis
//               cutting-edge deliverables.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="z-10 relative static bottom-[550px] left-[500px] ">
//         <img src={img} alt="" className="h-[378px] w-[378px] rounded-full  " />
//       </div>
//     </div>
//   );
// }
