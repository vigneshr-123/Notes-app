import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((s) => s.users)

  return (
    <div className=" bg-linear-to-r from-orange-400  to-yellow-400 min-h-screen flex">
      <div className="  flex flex-col gap-20 p-15 items-center">
        <div className="flex flex-col items-start mt-20  ">
          <h1 className="text-black font-[impact] text-4xl">Edit Profile</h1>
          <p className="text-black mt-2 font-light">
            Update your account details
          </p>
        </div>

        <div className="flex gap-20 items-center  ">
          <form className="shadow-2xl  bg-white flex flex-col w-[350px]   rounded-xl gap-5 p-8 items-center">
            <Link
              to="/profile"
              className="flex items-center gap-3 text-black text-2xl"
            >
              <img
                src={user?.avatar}
                className="w-20 h-20 rounded-full border-2 object-cover"
                alt="avatar"
              />
              <span className="font-light">{user?.name || "User"}</span>
            </Link>
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              placeholder="Name..."
              defaultValue={user?.name}
            />
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              placeholder="Email..."
              defaultValue={user?.email}
            />
            <button className="w-[50%] bg-blue-500 text-white p-2 rounded-md hover:scale-105 duration-150">
              {" "}
              Update Profile{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile
