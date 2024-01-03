import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "./header.css"

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 lg:px-20 px-4">
      <div className="flex gap-16 items-center justify-center text-white">
        <AppleIcon className="text-white cursor-pointer scale-150 ml-5 mb-2" />
        <div className="nav lg:flex gap-10 hidden">
          <a className="cursor-pointer p-2 border-b-8 border-transparent hover:border-b-8 border-solid hover:border-white hover:duration-300">Mac</a>
          <a className="cursor-pointer p-2 border-b-8 border-transparent hover:border-b-8 border-solid hover:border-white hover:duration-300">iPhone</a>
          <a className="cursor-pointer p-2 border-b-8 border-transparent hover:border-b-8 border-solid hover:border-white hover:duration-300">iPad</a>
          <a className="cursor-pointer p-2 border-b-8 border-transparent hover:border-b-8 border-solid hover:border-white hover:duration-300">iWatch</a>
          <a className="cursor-pointer p-2 border-b-8 border-transparent hover:border-b-8 border-solid hover:border-white hover:duration-300">Support</a>
        </div>
      </div>
      <div className="text-white flex items-center justify-center gap-4 mr-6">
        <SearchIcon className="cursor-pointer" />
        <div>|</div>
        <LocalMallOutlinedIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
