import React from "react";
import { FcAbout } from "react-icons/fc";

function About() {
  return (
    <div className="w-full h-[100vh] relative flex gap-7 px-6 py-6">
      <div className="left w-[50%] bg-slate-200">
        <img
          className="w-full h-full object-cover"
          src="\images\about-us-img.png"
          alt=""
        />
      </div>
      <div className="right w-[50%] py-2">
        <h3 className="text-[#104B84] font-bold text-[20px] flex gap-3 items-center font-heebo leading-4 tracking-widest">
          ABOUT US
          <FcAbout />
        </h3>
        <h1 className="text-[30px] font-bold mt-3 font-heebo leading-1 tracking-wide">
          Tezpur Institute of{" "}
          <span className="text-[#104B84]"> Paramedical</span> Sciences
        </h1>
        <ul className="flex flex-col gap-8 mt-4 font-nunito font-semibold">
          <li>
            TIPS (Tezpur Institute of Paramedical Sciences)aims at providing
            quality and affordable education in the Field of Skilled Oriented
            courses to all.
          </li>
          <li>
            We have a prospective Vision for preparing professionals who can
            utilize their professional studies in developemental process of
            themselves,their family,their society and in whole country.{" "}
          </li>
          <li>
            TIPS has been started with definite aim to motivate the unemployed
            youth to learn job oriented skill based courses . The ultimate
            objective is to eradicate Unemployment problem to some extent. All
            the courses have been designed to ensure that the students have up
            to date knowledge of their domain.We have designed our programs as
            "skill orientation " to ensure that adequate knowledge .
          </li>
          <li>
            TIPS is affilated training center by gramin skill development
            mission under National skill development Corporation under
            (Regno=TC211319).Tips is a unit of Rivage educational Trust.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
