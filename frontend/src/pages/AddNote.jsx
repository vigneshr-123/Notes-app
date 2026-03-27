import React, { useState } from 'react'
import axios from 'axios'
import { addNote } from '../features/NoteSlice'
import { useDispatch , useSelector } from 'react-redux'
import { IoCreate } from "react-icons/io5";
const AddNote = () => {
    const {user} = useSelector((state) => state.users)
    const disp = useDispatch()
    const [formdata,setFormdata] = useState({
        title:"",
        description:"",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user.id)
        disp(addNote({...formdata, owner : user.id}))
        setFormdata({
          title:'',
          description:''
        })
    }

    const handleInput = (e) => {
        const {name,value} = e.target
        setFormdata((prev) => ({...prev,[name]:value}))
        
       
    }



  return (
    <div className='min-h-screen flex bg-linear-to-r from-orange-400  to-yellow-400 justify-center items-center'>
      <form onSubmit={handleSubmit} className=' flex flex-col bg-white p-8 gap-4 w-[60%] border border-gray-500 rounded-md shadow-2xl ' action="">
        <h1 className='flex justify-center items-center gap-2 text-3xl'> <IoCreate />Create Your Note</h1>
        <input name='title' value={formdata.title} onChange={handleInput} type='text' className='py-3 border border-gray-500 rounded pl-3 outline-0' placeholder='Enter title...' />
        <textarea  name='description' value={formdata.description} onChange={handleInput} type='text' className='py-3 h-40  border  border-gray-500 rounded pl-3 outline-0' placeholder='Enter description...' />
        <button className=' cursor-pointer p-2 rounded bg-zinc-900 text-white hover:text-green-500 hover:scale-105 duration-150 '>Add note</button>
      </form>
    </div>
  )
}

export default AddNote
