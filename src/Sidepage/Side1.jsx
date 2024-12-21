// import React from 'react';
import logo from '../img/Screenshot 2024-12-21 040332.png'
import "../App.css"
import bit from "../img/bit.png"
import dev from "../img/dev.png"
import gitlab from "../img/gitlab.png"
import { Link } from 'react-router-dom'


const Side1 = () => {
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
                          <Link to="/" className='bg-blue-600 text-white blue-button ' >SAAS</Link>
                          <Link to ="/signout" className='bg-white text-black shadow blue-button '>Self Hosted</Link>
                      </div>
                  </div>
                  <div>
                  <div className=" grid grid-flow-row auto-rows-max box5 pt-3 pb-4">
                        <Link to="/main" className='box1'>
                            <div className="i"><i className="fa-brands fa-github"></i></div>
                            <div className="">Sign in With Github</div>
                        </Link>
                        <Link to="/main" className='box1'>
                            <div className="i w-9">
                                <img src={bit} alt="" />
                            </div>
                            <div className="">Sign in With Bitbucket</div>
                        </Link>
                         <Link to="/main" className='box1'>
                            <div className="i w-9">
                                <img src={dev} alt="" />
                            </div>
                            <div className="">Sign in With Azure Devops</div>
                        </Link>
                         <Link to="/main" className='box1 mb-2'>
                            <div className="i w-8"><img src={gitlab} alt="" /></div>
                            <div className="">Sign in With GitLab</div>
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

export default Side1;
