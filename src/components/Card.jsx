import React from "react";
import searching from "../assets/searching.png";
import coding from "../assets/coding.png";
import email from "../assets/email.png";
import idea from "../assets/idea.png";

const Card = () => {
  return (
    <>
      <div className="relative h-auto grid-flow-row w-auto flex flex-col">
        <div className="relative  opacity-100 z-20 grid items-center text-center justify-items-center ">
          <h2 className="text-6xl head lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl   filter drop-shadow-sm mt-9 text-slate-400">
            Reliable, efficient delivery
          </h2>
          <h2 className="mt-3 head  text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-semibold filter drop-shadow-sm text-black-100">
            Powerd by Technology
          </h2>
          <div className="text-sm width lg:text-md md:text-sm sm:text-xsm text-center filter drop-shadow-sm  text-gray-800 mt-5 w-5/12 h-2 opacity-50">
            <p className="">
              Use these responsive card components to show data entries and
              information to your users in multiple forms and contexts such
             
            </p>
          </div>
        </div>
        <div className="flex res justify-center mt-5   p-12 ">
          <div className="relative  rounded-t-lg z-20 h-48 mt-28  drop-shadow-2xl border ">
            <hr className="h-1 w-auto rounded-t-lg bg-cyan-300" />
            <div className="p-5">
              <h1 className="font-semibold mt-0 m-auto">Supervisor</h1>
              <h6 className="mt-2 opacity-40">
                Use these responsive card components to show data
              </h6>
              <img
                src={searching}
                alt="searching logo"
                className="absolute bottom-0 right-0 mb-5 mr-5 h-16 w-16"
              />
            </div>
          </div>
          <div className="relative min res flex flex-col">
            <div className="relative cal rounded-t-lg h-48  z-20  drop-shadow-2xl border ">
              <hr className="h-1 w-auto rounded-t-lg bg-red-600" />
              <div className="p-5">
                <h1 className="font-semibold ">Team Builder</h1>
                <h6 className="mt-2 opacity-40">
                  Use these responsive card components to show data
                </h6>
                <img
                  src={email}
                  alt="searching logo"
                  className="absolute bottom-0 right-0 mb-5 mr-5 h-16 w-16"
                />
              </div>
            </div>
            <div className="relative rounded-t-lg mt-5 h-48 z-20  drop-shadow-2xl border ">
              <hr className="h-1 w-auto rounded-t-lg bg-amber-300" />
              <div className="p-5">
                <h1 className="font-semibold ">Karma</h1>
                <h6 className="mt-2 opacity-40">
                  Use these responsive card components to show data
                </h6>
                <img
                  src={idea}
                  alt="searching logo"
                  className="absolute bottom-0 right-0 mb-5 mr-5 h-16 w-16"
                />
              </div>
            </div>
          </div>
          <div className="relative cal rounded-t-lg z-20 mt-24 h-48   drop-shadow-2xl border ">
            <hr className="h-1 w-auto rounded-t-lg bg-cyan-600" />
            <div className="p-5">
              <h1 className="font-semibold ">Calculator</h1>
              <h6 className="mt-2 opacity-40">
                Use these responsive card components to show data
              </h6>
              <img
                src={coding}
                alt="searching logo"
                className="absolute bottom-0 right-0 mb-5 mr-5 h-16 w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
