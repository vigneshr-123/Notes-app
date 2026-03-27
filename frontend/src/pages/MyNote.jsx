import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotes } from "../features/NoteSlice";
import { deleteNotes } from "../features/NoteSlice";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Editmodal from "../components/Editmodal";

const MyNote = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
    dispatch(getNotes(user.id));
  }, [user, dispatch]);
  const { loading, notes } = useSelector((state) => state.notes);
  return (
    <div className=" min-h-screen  bg-linear-to-r from-orange-400  to-yellow-400 ">
      <div className="flex justify-center">
        <h1 className=" flex items-center text-4xl font-[impact] ">My Notes</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 mt-8">
        {loading ? (
          <p>loading</p>
        ) : (
          notes?.map((x) => {
            return (
              <div
                key={x._id}
                className=" bg-gradient-to-l from-zinc-700 via-zinc-800 to-zinc-950 rounded-xl shadow-xl hover:shadow-xl transition p-5 cursor-pointer  "
              >
                <div className="text-2xl  font-sans uppercase   mb-2 truncate underline font-medium text-white">
                  {x.title}{" "}
                </div>
                <div className="text-white text-light font-medium h-35 overflow-hidden   ">
                  {x.description}
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setSelectedNote(x)}
                    className="bg-yellow-300  flex rounded-md items-center pr-2 pl-2 p-0.5 hover:scale-110 duration-200 font-medium"
                  >
                    {" "}
                    <MdOutlineModeEdit />
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteNotes(x._id))}
                    className="bg-red-600 hover:text-white flex rounded-md items-center pr-2 pl-2 p-0.5 hover:scale-110 duration-200 font-medium"
                  >
                    {" "}
                    <MdDeleteOutline />
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      {selectedNote && (
        <Editmodal note={selectedNote} onClose={() => setSelectedNote(null)} />
      )}
    </div>
  );
};

export default MyNote;
