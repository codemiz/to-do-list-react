import React from "react";

function Profile() {
  return (
    <div className="flex justify-center w-full pt-32 selection:bg-amber-400 ">
      <div className="w-2/4 h-3/4 flex justify-center items-center gap-3 flex-col">
        <div
          id="name"
          className="w-3/4 h-40 bg-slate-50 mb-24 drop-shadow-lg flex justify-center items-center font-sans font-bold text-4xl"
        >
          
          <h1>Micheal FredMan</h1>
        </div>
        <div
          id="email"
          className="w-3/5 h-20 border-b-2 flex justify-between items-center font-sans  text-x"
        >
          <div className="flex gap-4 text-xl">
          <h4 className="font-bold">Email:</h4>
          <p className="font-semibold">example@email.com</p></div>
          <button className="w-56 h-14 bg-amber-400 font-semibold rounded-md hover:bg-black hover:text-orange-300">Change email</button>
        </div>
        <div
          id="task"
          className="w-3/5 h-20 border-b-2 flex justify-between items-center font-sans text-x"
        >
          <div className="flex gap-4 text-x1">
          <h4 className="font-bold ">Total tasks saved:</h4>
          <p className="font-semibold ">10</p></div>
          <button className="w-56 h-14 bg-amber-400 font-semibold rounded-md hover:bg-black hover:text-orange-300">Add task</button>
        </div>
        <div
          id="task"
          className="w-3/5 h-20  mt-6 flex justify-between items-center font-sans text-x"
        >
          
          <button className="w-64 h-14 bg-black text-white font-semibold hover:bg-zinc-700 rounded-md hover:text-white">Log out</button>
          <button className="w-64 h-14 bg-amber-400  font-semibold hover:bg-black rounded-md hover:text-orange-300">Change password</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
