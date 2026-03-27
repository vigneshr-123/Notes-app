import React, { useState } from 'react'
import { login } from '../features/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { PiUserFocusThin } from "react-icons/pi";
import toast from 'react-hot-toast';


const Login = () => {
  const dispatch = useDispatch()
   const Navigate = useNavigate()
  const { loading, user, error } = useSelector((s) => s.users)
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormdata((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res= await dispatch(login(formdata))
    
    if(res.payload.message){
    toast.success(res.payload.message)
    Navigate('/userhome')

    }
    else if(res.payload.error){
      toast.error(res.payload.error)
    }
    
  }

  return (
    <div>


      <div className='h-screen bg-[#f8f8ff] '>
        <div className=' flex justify-center '>
          <form onSubmit={handleSubmit} className='  gap-4  mt-50  p-8 flex flex-col items-center rounded-md b-2   shadow-2xl'>
            <div className='flex flex-col justify-center items-center'>
           <h1 className='text-6xl  font-light animate-pulse'> <PiUserFocusThin /></h1>

              <h1 className='font-light  text-3xl'>Login</h1>
            </div>
            <input onChange={handleInput} name='email' value={formdata.email} className=' shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white text-black rounded-sm p-2 font-light' type="email" placeholder='Email...' />
           
           
              <input onChange={handleInput} name='password' value={formdata.password} className='shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white text-black rounded-sm p-2 font-light' type="text" placeholder='Password...' />
              <h3 className='font-light text-[14px]'> <span className='text-blue-700 '> <Link>forgot password ?</Link></span></h3>
           
           
            <div className='flex justify-center'>
              <button className='bg-black text-white w-30 rounded-sm p-1 font-light hover:scale-105 duration-200 cursor-pointer '>Submit</button>
            </div>
            <p className='font-light '>Don't have an account? <span className='text-blue-700 '> <Link to={'/register'}>Register</Link></span></p>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Login
// bg-linear-to-r from-[#40474c] via-[#d5d1d7] to-[#d5d1d7] login background