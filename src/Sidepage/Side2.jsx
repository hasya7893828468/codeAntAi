import React from 'react';
import logo from '../img/Screenshot 2024-12-21 040332.png'
import "../App.css"
// import bit from "../img/bit.png"
// import dev from "../img/dev.png"
import gitlab from "../img/gitlab.png"
import { Link } from 'react-router-dom';


const Side2 = () => {
  return (
    <>
        <div className='main2 '>
              <div className="grid grid-flow-row auto-rows-max ">
                  <div className=' side text-center'>
                      <div className="flex side1 p-4  ">
                          <img src={logo} alt="" className='w-6 '/>
                          <div className="pl-3">
                              CodeAnt AI
                          </div>
                      </div>
                      <div className="side2 font-bold text-2xl ">
                          Welcome to CodeAnt AI
                      </div>
                      <div className="button  ">
                          <Link to="/" className='bg-white shadow text-black blue-button'>SAAS</Link>
                          <Link to="/signout" className='bg-blue-600 shadow text-blue-50  blue-button '>Self Hosted</Link>
                      </div>
                  </div>
                  <div>
                  <div className=" grid grid-flow-row auto-rows-max box5 pt-3 pb-4">
                       
                       
                         <Link to="/main" className='box1 mb-2'>
                            <div className="i w-8"><img src={gitlab} alt="" /></div>
                            <div className="">Sign in With GitLab</div>
                        </Link>
                        <Link to="/main" className='box1 mb-2'>
                            <div className="i w-8">
                            <i className="fa-solid fa-key"></i>
                                {/* <img src={gitlab} alt="" /> */}
                                </div>
                            <div className="">Sign in With SSO</div>
                        </Link>
                       
                     </div>
                  </div>
                  <div className="text-center mt-5">
                    By signing up you agree to the <b>Privacy Policy</b>
                  </div>
              </div>
             
              </div>
    </>
  );
}

export default Side2;
