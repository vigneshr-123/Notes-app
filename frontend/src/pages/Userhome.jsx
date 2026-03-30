import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbNotes } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { MdNoteAdd } from "react-icons/md";
import NotesCalendar from "../components/NotesCalendar";
import MyNote from "./MyNote";
import AddNote from "./AddNote";

const Userhome = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  return (
    <div className="flex h-screen bg-linear-to-r from-orange-400  to-yellow-400">
      <div className="  bg-linear-to-r from-orange-400  to-yellow-400 h-screen ">
        <div className=" h-screen bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-950 text-white s p-3 ">
          <h2 className="text-2xl font-light mb-7">Menu</h2>

          <div className="flex hover:bg-zinc-700 p-1.5 rounded-lg border justify-center gap-2.5  mb-5">
            <input
              className="outline-0"
              type="text"
              placeholder="  Search..."
            />
            <button className="text-2xl cursor-pointer hover:scale-105 duration-75 ">
              <CiSearch />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <button
              onClick={() => setSelectedPage("dashboard")}
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <RxDashboard />
              Dashboard
            </button>

            <button
              onClick={() => setSelectedPage("mynote")}
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <TbNotes /> My Notes
            </button>

            <button
              onClick={()=>setSelectedPage('addnote')}
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <MdNoteAdd /> Addnote
            </button>

            <button
              to="/settings"
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <IoSettingsOutline /> Settings
            </button>
          </nav>
        </div>
      </div>

      {/* maibncontent */}
      <div className="flex-1 p-6 overflow-auto">
        {selectedPage === "dashboard" && <NotesCalendar />}
        {selectedPage === "mynote" && <MyNote />}
        {selectedPage === "addnote" && <AddNote />}
        {selectedPage === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default Userhome;
