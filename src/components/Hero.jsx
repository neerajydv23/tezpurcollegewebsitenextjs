import React from "react";

function Hero() {
  return (
    <div className="w-full h-[100vh] relative">
      <img
        className="w-full h-full object-cover"
        src="\images\WhatsApp Image 2024-03-08 at 6.09.04 PM (1).jpeg"
        alt=""
      />
      <div className="overlay w-full h-full absolute top-0 bg-black opacity-50"></div>
      <div className="content w-full h-full absolute top-0 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-[45px] font-heebo font-bold">
            Tezpur Institute of Paramedical Sciences
          </h1>
          <p className="w-[60%]  mx-auto font-nunito font-semibold">
            TIPS (Tezpur Institute of Paramedical Sciences) aims at providing
            quality and affordable education in the Field of Skilled Oriented
            courses to all.
          </p>
        </div>
        <div className="mt-5 flex gap-4">
          <button
            className="px-5 py-2 bg-[#3c97e1] text-white rounded-md font-nunito font-semibold  
          transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#104B84] duration-300 "
          >
            Learn More
          </button>
          <button
            className="px-5 py-2 border text-white rounded-md font-nunito font-semibold 
            transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#104B84] duration-300
          "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
