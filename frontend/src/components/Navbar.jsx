import React from 'react'
import { Link } from 'react-router-dom'
import { GiWhiteBook } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/UserSlice';
import { TbLogout2 } from "react-icons/tb";
import toast from 'react-hot-toast';
import { MdNoteAdd } from "react-icons/md";


const Navbar = () => {

  const dispatch = useDispatch()
  const { user } = useSelector((s) => s.users)

  const { token } = useSelector((s) => s.users)
  return (
    <div >
      <div className='flex justify-between bg-[#1f1f1f] p-3 shadow-2xl '>
        <h1 className='  text-3xl font-[impact]  hover:scale-110 duration-200'><Link className='flex items-center gap-1 text-white border-1 rounded-md p-1 ' to={'/'}> <GiWhiteBook />NOTEIT </Link> </h1>
        <div className='flex gap-5 items-center '>

          {
            token ? <>

              <Link to={'/userhome'} className='font-semibold text-lg hover:bg-gray-700 duration-200 p-1   pl-2 pr-2 rounded-xl  text-white '>Home</Link>

              <Link to="/profile" className="flex  items-center gap-2 text-white hover:scale-105 duration-200">
                <img src={user?.avatar} alt="profile" className="w-8 h-8 rounded-full border" />
                <span className="font-light">{user?.name || "User"} </span>
              </Link>

              {/* <Link className='flex text-white items-center text-2xl' to={'/addnote'}><MdNoteAdd /></Link> */}

              <button onClick={() => {
                dispatch(logout());
                toast("Logged out .", {
                  style: {
                    background: "white",
                    color: "black",
                  },
                });
              }}
                className=' font-semibold text-3xl hover:scale-110 duration-200 text-white  rounded-sm hover:text-red-600 hover:drop-shadow-[0_0_4px_#FF0000]  '> <TbLogout2 /></button></> : <> <Link className='font-semibold text-lg hover:bg-gray-700 duration-200 p-1   pl-2 pr-2 rounded-xl  text-white' to={'/login'}>Login</Link>
              <Link className='font-semibold text-lg p-1  hover:bg-gray-700 duration-200 text-white pl-2 pr-2 rounded-xl  ' to={'/register'}>Register</Link></>
          }
        </div>
      </div>
    </div>

  )

}

export default Navbar
