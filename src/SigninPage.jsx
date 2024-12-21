import React from 'react';
import img from "./img/Screenshot 2024-12-18 003232.png";
import logo from "./img/Screenshot 2024-12-21 040332.png";
import img2 from './img/Screenshot 2024-12-21 045623.png';
import "./App.css";

const SigninPage = ({ rightComponent }) => {
  return (
    <div className="main grid grid-flow-col">
      {/* Left Side Content */}
      <div className="bg-white main1">
        <div className="box">
          <div className="mainbox rounded-xl">
            <div className="head flex text-justify rounded-top-xl">
              <img src={logo} alt="" className="h-10" />
              <h2 className="font-bold pt-2 pl-2">AI to Detect & Autofix Bad Code</h2>
            </div>
            <div className="grid grid-flow-col text-center pt-6 auto-rows-max">
              <div>
                <div className="font-bold">30+</div>
                <div>Language Support</div>
              </div>
              <div>
                <div className="font-bold">10K+</div>
                <div>Developers</div>
              </div>
              <div>
                <div className="font-bold">100K+</div>
                <div>Hours Saved</div>
              </div>
            </div>
          </div>
          <div className="mainbox2">
            <div className="grid grid-flow-col auto-rows-max text-center">
              <div>
                <div className="pt-3 pl-4">
                  <img src={img2} alt="" />
                </div>
                <div className="font-semibold text-sm">Issues Fixed</div>
                <div className="font-extrabold text-2xl">500K+</div>
              </div>
              <div className="p-3">
                <div className="text-blue-700 pt-4">
                  <i className="fa-solid fa-arrow-up"> 14% </i>
                </div>
                this week
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="" className="image absolute bottom-0 left-0" />
        </div>
      </div>

      {/* Right Side Content (Dynamic) */}
      <div className="main2">{rightComponent}</div>
    </div>
  );
};

export default SigninPage;
