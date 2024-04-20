import React from 'react'

function Homepage() {
  return (
    <div className='flex items-center flex-col mt-8 '>
     <div className='w-2/4 h-60  border-2 flex justify-center items-center gap-3 flex-col' id='textarea'>
      <textarea name="" id="" cols="20" rows="4" placeholder='Type here...' className='w-3/4 h-2/4 text-xl p-2 border-2 border-black rounded-xl'> </textarea><button className='bg-amber-400 text-white p-3 w-3/4 rounded-xl'>Submit</button>
     </div>

    <div id='lists' className='w-2/4 h-96 border-2'></div>
    </div>
  )
}

export default Homepage
