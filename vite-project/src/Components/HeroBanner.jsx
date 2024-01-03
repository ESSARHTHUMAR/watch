import React, { useState } from "react";
import Header from "./Header";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import "../../index";
import "./heroBanner.css"

const HeroBanner = () => {
  const [image, setImage] = useState("/images/4.png");
  const [bgColor, setBgColor] = useState("#434659");
  const color = ["#434659", "#6ADDCC", "#F9CDC4"];

  function handleClick(e) {
    // setBgColor(color[e.target.id])
  }

  function handleImage(e) {
    setImage(e.target.currentSrc);
    setBgColor(color[e.target.id]);
  }

  return (
    <div className="text-lg max-w-[1440px] mb-5 flex mx-auto ">
      <div className="bg-white flex-[0.075] lg:flex flex-col items-center justify-between hidden">
        <div className="flex m-8">
          <MenuIcon className="hover:text-[#434659] icons scale-150 text-[#28282B]" />
        </div>
        <div className="flex flex-col mb-12 gap-8">
          <FacebookRoundedIcon className="icons scale-[1.25] text-[#B6CCDA] hover:text-[#434659]" />
          <TwitterIcon className="icons scale-[1.25] text-[#B6CCDA] hover:text-[#434659]" />
          <LinkedInIcon className="icons scale-[1.25] text-[#B6CCDA] hover:text-[#434659]" />
        </div>
      </div>
      <div
        id="main"
        style={{ backgroundColor: bgColor }}
        className="flex-1 lg:rounded-l-3xl"
      >
        <Header />
        <div className="px-4 lg:px-20 py-5 flex lg:flex-row flex-col items-center gap-20">
          <div className="ml-5">
            <h1 className="text-white hidden lg:block lg:text-5xl leading-[60px] drop-shadow-lg">
              <strong>The Perfect Moment</strong>
              <br />
              <span>Between Past And</span>
              <br />
              <span>Future.</span>
            </h1>

            <button className="mt-20 p-4 border-[3px] border-solid border-white text-white w-[50%] font-bold rounded-3xl hover:bg-white hover:text-black hover:border-[#28282B] duration-300">
              BUY NOW
            </button>
          </div>
          <div>
            <img className="lg:ml-[12vw]" src={image} alt="" />
          </div>
        </div>
        <div className="flex justify-end m-8 gap-14 relative">
          <div className="container w-[131px] h-[70px] bg-[#757F8E] rounded-lg relative border-none">
            <img
              id="0"
              onClick={handleImage}
              className="image contain w-[90px] h-[82px] bg-contain bg-no-repeat left-5 absolute bottom-5 "
              src="/images/4.png"
              alt=""
            />
          </div>
          <div className="container w-[131px] h-[70px] bg-[#5AA19E] rounded-lg relative ">
            <img
              id="1"
              onClick={handleImage}
              className="image contain w-[90px] h-[82px] bg-cover bg-no-repeat absolute left-5 bottom-5 "
              src="/images/5.png"
              alt=""
            />
          </div>
          <div className="container w-[131px] h-[70px] bg-[#B09799] rounded-lg relative">
            <img
              id="2"
              onClick={handleImage}
              className=" image contain w-[90px] h-[82px] bg-cover bg-no-repeat left-5 absolute bottom-5"
              src="/images/6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
