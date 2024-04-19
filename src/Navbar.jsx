import React from 'react'

function Navbar(props) {
  return (
    <div className='bg-fuchsia-400 w-full h-14 flex justify-center items-center font-sans text-lg text-white'>
      <ul className='flex gap-16 font-semibold'>
        <li className='cursor-pointer hover:text-black'>{props.home}</li>
        <li className='cursor-pointer hover:text-black'>{props.one}</li>
        <li className='cursor-pointer hover:text-black'>{props.two}</li>
      </ul>
    </div>
  )
}

export default Navbar
