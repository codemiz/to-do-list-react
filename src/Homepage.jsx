import React from "react";

function Homepage() {
  return (
    <div className="flex items-center flex-col mt-8 ">
      <div
        className="w-2/4 h-60 flex justify-center items-center gap-3 flex-col"
        id="textarea"
      >
        <textarea
          name=""
          id=""
          cols="20"
          rows="4"
          maxLength={200}
          placeholder="Type here..."
          className="w-3/4 h-2/4 text-xl p-2 border-2 border-black rounded-xl"
        >
          {" "}
        </textarea>
        <button className="bg-amber-400 text-white p-3 w-3/4 rounded-xl">
          Submit
        </button>
      </div>
<div id="center" className="w-2/4 h-10 flex  mt-10  mb-5 justify-center"> <div className="w-2/4 h-full bg-black flex justify-center text-amber-400 items-center font-bold"><h3>Your To Do List</h3></div> </div>
      <div
        id="lists-div"
        className="w-2/4 flex flex-col items-center mb-40 gap-4 pt-5"
      >
        
        
        <div id="list" className="w-3/4 h-20 bg-slate-200  flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>1</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.Lorem ipsum dolor sit amet consectetus</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
        <div id="list" className="w-3/4 h-20 bg-slate-200 flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>2</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
        <div id="list" className="w-3/4 h-20 bg-slate-200 flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>3</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
        <div id="list" className="w-3/4 h-20 bg-slate-200 flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>4</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
        <div id="list" className="w-3/4 h-20 bg-slate-200 flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>5</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
        <div id="list" className="w-3/4 h-20 bg-slate-200 flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>6</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
        <div id="list" className="w-3/4 h-20 bg-slate-200 flex justify-between items-end">
          <div id="circle" className="w-20 h-20 bg-amber-400 rounded-r-full flex justify-center items-center text-5xl font-sans font-bold"> <h1>7</h1></div>
          <div id="circle" className="w-3/4 h-20  flex justify-center items-center font-sans"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur iure nostrum laborum! Enim, excepturi.</p></div>
          <div id="circle" className="w-8 h-8 bg-black flex justify-center items-center text-1xl font-sans text-white font-semibold"> <h3>X</h3></div>

        </div>
      </div>
      
    </div>
  );
}

export default Homepage;
