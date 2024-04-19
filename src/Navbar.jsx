import React from 'react'

function Navbar(props) {
  return (
    <div className='bg-slate-100 w-full h-14 flex justify-center items-center font-sans text-lg text-black drop-shadow-lg'>
      {/* <h2 className='font-sans text-lg font-bold'>ToDoList Maker</h2> */}
      <ul className='flex gap-12 font-semibold'>
        <li className='cursor-pointer hover:text-amber-400 hover:bg-black p-4'>{props.home}</li>
        <li className='cursor-pointer text-amber-400 bg-black p-4'>{props.one}</li>
        <li className='cursor-pointer hover:text-amber-400 hover:bg-black p-4'>{props.two}</li>
      </ul>
      {/* <div></div> */}
    </div>
  )
}

export default Navbar
