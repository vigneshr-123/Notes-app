import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { getNotes } from "../features/NoteSlice";
import { Link } from "react-router-dom";

const NotesCalendar = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [page, Setpage] = useState("calendar");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?._id) {
      dispatch(getNotes(user._id));
    }
  }, [dispatch, user]);

  const formatDate = (date) => {
    const d = new Date(date);
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  };

  const createdDates = notes
    .map((n) => n.createdAt || n.createAt) // ✅ handle both
    .filter(Boolean)
    .map((d) => formatDate(d));

  const completedDates = notes
    .filter((n) => n.completed && n.completedAt)
    .map((n) => formatDate(n.completedAt));

  const dueDates = notes
    .filter((n) => n.dueDate)
    .map((n) => formatDate(n.dueDate));

  // const filteredNotes = notes.filter((note) => {
  //   if (!note.createdAt) return false;
  //   return formatDate(note.createdAt) === formatDate(selectedDate);
  // });

  const filteredNotes = notes.filter((note) => {
    const selected = formatDate(selectedDate);

    const created = note.createdAt || note.createAt; // ✅ FIX

    return (
      (created && formatDate(created) === selected) ||
      (note.dueDate && formatDate(note.dueDate) === selected) ||
      (note.completedAt && formatDate(note.completedAt) === selected)
    );
  });

  return (
    <div className="flex flex-col items-end  mt-6 gap-5 ">
      {/* Main Container */}
      <div className="w-full max-w-xl bg-amber-50 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          📅 Notes Calendar
        </h2>

        {/* Calendar Centered */}
        <div className="flex justify-center ">
          <div className="scale-90 md:scale-100">
            <Calendar onChange={setSelectedDate} value={selectedDate} />
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3 text-gray-700">
            Notes on this day
          </h3>

          {filteredNotes.length === 0 ? (
            <p className="text-gray-500 text-sm">No notes</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {filteredNotes.map((note) => (
                <div
                  key={note._id}
                  className=" p-2 rounded-lg shadow-xl  hover:shadow-md "
                >
                  <p className="font-medium text-black">{note.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className=" flex justify-end items-end mt-5">
        {/* <Link
to={'/addnote'}
          className=" bg-gradient-to-l from-zinc-700 via-zinc-800 to-zinc-950 text-white px-4 py-2 rounded-lg shadow-md hover:scale-110 duration-200 hover:text-yellow-500 transition"
        >
          + CreaLink
        </Link> */}
      </div>
    </div>
  );
};
export default NotesCalendar;
