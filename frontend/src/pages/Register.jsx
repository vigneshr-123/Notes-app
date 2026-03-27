import React, { useState } from 'react'
import { register } from '../features/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Register = () => {
    const dispatch = useDispatch()
    const {user}=useSelector((s)=>s.users)
    const [formdata,setFormdata] = useState({
        username:"",
        email:"",
        password:""
    })




    const handleInput = (e) => {
        const {name,value} = e.target
        setFormdata((prev) => ({...prev,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formdata))
        setFormdata({
        username: "",
        email: "",
        password: ""
      })
      
  
    }


  return (
    <div>
       
    <div className='h-screen bg-[#f8f8ff] '>
      <div className=' flex justify-center '>
        <form onSubmit={handleSubmit} className='gap-5  mt-50  p-10 flex flex-col rounded-md b-2 shadow-2xl '>
        <div className='flex justify-center'>
        <h1 className='font-light text-3xl'>Register</h1>
        </div>
        <input onChange={handleInput} name='username' value={formdata.username} className=' shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white rounded-sm p-2 font-light' type="text" placeholder='Name...' />
        <input onChange={handleInput} name='email' value={formdata.email} className='shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white rounded-sm p-2 font-light' type="text" placeholder='Email...' />
        <input onChange={handleInput} name='password' value={formdata.password} className='shadow-[0_0_12px_rgba(0,0,0,0.25)] bg-white rounded-sm p-2 font-light' type="text" placeholder='Password...' />
        <div className='flex justify-center'>
        <button className='bg-black text-white w-30 rounded-sm p-1 font-light hover:scale-105 duration-200 cursor-pointer '>Submit</button>
      </div>
      <p className='font-light'>Already have an account? <span className='text-blue-700'><Link to={'/login'}  >Sign in</Link>  </span></p>
      </form>
      </div>    
    </div>
  
    </div>
  )
}

export default Register
