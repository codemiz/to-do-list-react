import React from 'react'

function Navbar(props) {
  return (
    <div className='bg-slate-100 w-full h-14 flex justify-center items-center font-sans text-lg text-black drop-shadow-lg'>
      <ul className='flex gap-12 font-semibold'>
        <li className='cursor-pointer hover:text-white hover:bg-black p-4'>{props.home}</li>
        <li className='cursor-pointer hover:text-white hover:bg-black p-4'>{props.one}</li>
        <li className='cursor-pointer hover:text-white hover:bg-black p-4'>{props.two}</li>
      </ul>
    </div>
  )
}

export default Navbar
