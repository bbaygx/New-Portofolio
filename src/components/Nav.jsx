import React from 'react'
import {ImSearch} from "react-icons/im"

const Nav = () => {
  return (
    <nav className='absolute w-full z-10 px-6'>
    <span className='flex items-center py-3 gap-2'>
      <a className='text-sm text-white/70'>Pages</a>
      <i className='text-xs text-white'>/</i>
      <a className='text-sm font-normal text-white'>Profiles</a>
    </span>
    
    <div className='flex justify-between items-center flex-wrap'>
    <span className='font-semibold text-white'>Profile</span>
      <div className="bg-white py-2 px-4 mt-2 rounded-xl">
        <button className='mr-2'><ImSearch/></button>
        <input type="text" className='outline-none text-sm' placeholder='Cari di sini...'/>
      </div>
    </div>
  </nav>
  )
}

export default Nav