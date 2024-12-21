import React from 'react';
import "../App.css"
import Small from './Small.jsx';
import logo from "../img/Screenshot 2024-12-21 040332.png"

const MainSidepage = () => {
  return (
    <>
    <div className="flex c1">
    <div className="flex dd1 side1 p-3  ">
                              <img src={logo} alt="" className='w-8 '/>
                              <div className="pl-3 text-2xl">
                                  CodeAnt AI
                              </div>
                 </div>
                 <div className="dropdown-center dd1  j">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu cqw">
                        <li><a className="dropdown-item-text " href="#">
                        <div className=" flex d2 mt-3">
                        <div><i className="pr-3 fa-solid fa-house-chimney-window"></i></div>
                    <div className="font-bold">Repositories</div>
                 </div>
                            </a></li>
                        <li><a className="dropdown-item" href="#">
                        <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-code pr-3"></i></div>
                    <div className="font-bold">AI Code Review</div>
                 </div>
                            </a></li>
                        <li><a className="dropdown-item" href="#">
                        <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-cloud mr-3"></i></div>
                    <div className="font-bold">Cloud Security</div>
                 </div>
                            </a></li>

                        <li><a className="dropdown-item" href="#">
                        <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-book mr-3"></i></div>
                    <div className="font-bold">How to Use</div>
                 </div>
                            </a></li>

                        <li><a className="dropdown-item" href="#">
                        <div className=" flex d2 mt-2">
                        <div><i className="fa-solid fa-gear mr-3"></i></div>
                    <div className="font-bold">Settings</div>
                 </div>
                            </a></li>


                    </ul>
                    </div>
            
    </div>



                 <div className="u">
        <div className="grid grid-flow-row auto-rows-max ">
            <div className=' sidemainpage1  border rounded-t-lg'>
                <div className='flex uu1 sideuui'>
                    <div>
                        <div className=' text-2xl mb-2' ><b>Repositories</b></div>
                        33 total repositories
                    </div>
                    <div className="flex ">
                        <button className='p-2 px-3 rounded border bg-white'><i className="fa-solid fa-arrows-rotate mr-2"></i> Referesh All</button>
                        <div className='ml-2 p-2 px-3 rounded bg-blue-600 text-white'><i className="fa-solid fa-plus mr-2"></i> Add Repository</div>
                    </div>
                   

                </div>
                <div className='flex'>
                <i className="fa-solid fa-magnifying-glass   mt-3   p-2    i  text-center "></i>

                    <input type="search" className='inp u-0 mt-3 p-2  ' placeholder='hello'/>
                </div>

            </div>
            <div>
                <Small/>
            </div>
            
         </div>
         </div>
    </>
  );
}

export default MainSidepage;
