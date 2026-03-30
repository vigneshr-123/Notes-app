import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../features/NoteSlice";
import toast from "react-hot-toast";

const Editmodal = ({ note, onClose }) => {
  //   const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (note) {
      setFormdata({
        title: note.title,
        description: note.description,
      });
    }
  }, [note]);

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleupdate = () => {
    console.log("updating...", note._id);
    dispatch(
      updateNotes({
        id: note._id,
        title: formdata.title,
        description: formdata.description,
      }),
    );
    // toast.success("Note updated succcesfully");
    onClose();
  };

  return (
    //   background body
    <div className="flex items-center justify-center  gap-5 p-5 fixed inset-0 bg-black/10 backdrop-blur-md z-50   ">
      <div className="flex items-center flex-col p-15 rounded-2xl   bg-white/30 border border-white/20 shadow-xl">
        <h1 className="font-light mb-5 text-2xl">Edit Your Note</h1>

        <div className="flex flex-col gap-3">
          <input
            className=" border bg-gray-100 text-lg p-2 rounded pl-3 outline-0 font-light"
            name="title"
            type="text "
            placeholder="title"
            value={formdata.title}
            onChange={handlechange}
          />
          <textarea
            className=" bg-gray-100 py-3 h-30 p-2 border text-lg rounded pl-3 outline-0 font-light"
            name="description"
            placeholder="description"
            value={formdata.description}
            onChange={handlechange}
          />
        </div>

        <div className="flex justify-between gap-5 mt-4">
          <button
            className="bg-gray-900 text-white cursor-pointer hover:text-green-400  p-2 rounded-md font-medium  hover:scale-110 duration-200"
            onClick={handleupdate}
          >
            update
          </button>

          <button
            className="bg-gray-900 hover:text-red-500 cursor-pointer text-white hover:scale-110 duration-200 p-2 rounded-md font-medium"
            onClick={onClose}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editmodal;
