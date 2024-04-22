import React from "react";

function Profile() {
  return (
    <div className="flex justify-center h-screen w-full pt-32">
      <div className="w-2/4 h-3/4 border-2 flex justify-center items-center gap-3 flex-col">
        <div
          id="name"
          className="w-3/4 h-1/4 bg-slate-100 flex justify-center items-center font-sans font-bold text-6xl"
        >
          
          <h1>Micheal FredMan</h1>
        </div>
        <div
          id="email"
          className="w-3/4 h-1/4 bg-slate-100 flex justify-evenly items-center font-sans font-bold text-2xl"
        >
          <div className="flex gap-4">
          <h4>Email:</h4>
          <p>email@email.com</p></div>
          <button className="w-56 h-10 bg-amber-400">Change email</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
