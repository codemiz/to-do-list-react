import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='bg-slate-200 w-full h-14 flex justify-center items-center font-sans text-lg text-black drop-shadow-lg'>
      {/* <h2 className='font-sans text-lg font-bold'>ToDoList Maker</h2> */}
      <ul className='flex gap-12 font-semibold'>
        <NavLink  className={(e)=>{return e.isActive? "bg-black text-amber-400": ""}} to={"/"}><li className='cursor-pointer hover:text-amber-400 Hover:bg-black p-4'>{props.first}</li></NavLink>
        <NavLink  className={(e)=>{return e.isActive? "bg-black text-amber-400": ""}} to={ props.second=="Profile"?"/profile":"/login"}><li className='cursor-pointer hover:text-amber-400 hover:bg-black p-4'>{props.second}</li></NavLink>
        <NavLink  className={(e)=>{return e.isActive? "bg-black text-amber-400": ""}} to={"/signup"}><li className='cursor-pointer hover:text-amber-400 hover:bg-black p-4'>{props.third}</li></NavLink>
        
      </ul>
      {/* <div></div> */}
    </div>
  )
}

export default Navbar
