import React from 'react'

import {HiOutlineQrCode} from "react-icons/hi2"
import {article} from "../constants"

const Aside = () => {
  return (
    <>
      <aside className="fixed shadow-md -translate-x-full md:translate-x-0 duration-200 transform-cpu md:w-64 z-40 h-screen top-0 left-0">
         <div className="icon px-3 flex items-center rounded-b-md shadow-md py-3 gap-3">
          <HiOutlineQrCode className='text-4xl text-purple-600'/>
          <span className='text-xl font-medium text-gray-700'>Bayu Dev</span>
         </div>
         <div className="menu mt-10">
        {
          article.map(item => (
            <div className="project mt-2 transition-all ease-in-out duration-200 rounded-md px-2 mx-5 hover:scale-105 hover:bg-gray-100 cursor-pointer flex items-center" key={item.id}>
            <item.icons className={`text-2xl ${item.color}`}/>
            <h1 className="text-lg font-medium text-gray-700 px-3 py-3">{item.title}</h1>
            </div>
          ))
        }

         </div>
      </aside>
    </>
  )
}

export default Aside