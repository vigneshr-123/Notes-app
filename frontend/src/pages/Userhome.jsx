import React from 'react'
import { Link } from 'react-router-dom'
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbNotes } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { MdNoteAdd } from "react-icons/md";


const Userhome = () => {
    return (
      <div className="  bg-linear-to-r from-orange-400  to-yellow-400 h-screen ">
        <div className="w-64 h-screen bg-gradient-to-l from-zinc-700 via-zinc-800 to-zinc-950 text-white s p-3 ">
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
            <Link
              to="/userhome"
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <RxDashboard />
              Dashboard
            </Link>

            <Link
              to="/mynote"
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <TbNotes /> My Notes
            </Link>

            <Link
              to="/addnote"
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <MdNoteAdd /> Addnote
            </Link>

            <Link
              to="/settings"
              className="hover:bg-zinc-700 p-2 rounded-md flex items-center gap-2.5 text-xl font-light"
            >
              <IoSettingsOutline /> Settings
            </Link>
          </nav>
        </div>
      </div>
    );
}

export default Userhome
