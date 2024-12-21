import React from 'react';
import js from "./Small"
import "../App.css"

const Small = () => {
    const data =js;

    const ui=data.map((e)=>{
        return(
            <>
            <div className='border p-4'>
                <div className='flex mb-2'>
                    <div className='font-bold'>
                        {e.name}
                    </div>
                    <div className="ml-2 rounded-5 px-2 text-wrap border bg-blue-100 text-blue-500">
                        {e.public}
                    </div>
                </div>
                <div className='flex'>
                    <div className=' flex'>
                        {e.course}
                       <div className="mx-2">
                       <div className='dot rounded'></div>
                       </div>
                    </div>
                    <div className='flex mx-4 '>
                        <div className='text-xs pt-1 mx-2' >
                        <i class="fa-solid fa-database "></i>
                        </div>
                        {e.value}KB
                    </div>
                    <div>
                      Update   {e.day} days ago
                    </div>
                </div>
            </div>
            </>
        )
    })


  return (
    <div>
      {ui}
    </div>
  );
}

export default Small;
