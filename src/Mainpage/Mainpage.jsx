import React from 'react';
import logo from '../img/Screenshot 2024-12-21 040332.png';
import "../App.css"
import MainSidepage from './MainSidepage';
const Mainpage = () => {
  return (
    <>
    <div className=" aside  ">
        <div className=" aside1  bg-white">
             <div className="flex side1 p-3  ">
                          <img src={logo} alt="" className='w-8 '/>
                          <div className="pl-3 text-2xl">
                              CodeAnt AI
                          </div>
             </div>
                <div className=" flex d1 dd">
                    <div className="">hasya ram prakash</div>
                    <div><i class="fa-solid fa-angle-down"></i></div>
                </div>
                <div className='dd'> 
                     <div className=" flex d2 mt-3">
                        <div><i className="pr-3 fa-solid fa-house-chimney-window"></i></div>
                    <div className="font-bold">Repositories</div>
                 </div>
                 <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-code pr-3"></i></div>
                    <div className="font-bold">AI Code Review</div>
                 </div>
                 <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-cloud mr-3"></i></div>
                    <div className="font-bold">Cloud Security</div>
                 </div> 
                 <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-book mr-3"></i></div>
                    <div className="font-bold">How to Use</div>
                 </div>
                  <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-gear mr-3"></i></div>
                    <div className="font-bold">Settings</div>
                 </div>
                 <div className=" flex d2 d221">
                        <div><i className="fa-solid fa-phone mr-3"></i></div>
                    <div className="font-bold">Support</div>
                 </div>
                 <div className=" po flex d2 mt-1">
                        <div><i className="fa-solid fa-right-from-bracket mr-3"></i></div>
                    <div className="font-bold">Logout</div>
                 </div>
                 
            </div>
            

        </div>
        <div className="aside2">
            <MainSidepage/>
        </div>
    </div>
      
    </>
  );
}

export default Mainpage;
