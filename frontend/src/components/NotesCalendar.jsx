import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { getNotes } from "../features/NoteSlice";

const NotesCalendar = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const user = JSON.parse(localStorage.getItem("user"));
 
    useEffect(() => {
    if (user?._id) {
      dispatch(getNotes(user._id));
    }
    [dispatch, user];
    });
    

  const createdDates = notes.map((n) => new Date(n.createdAt).toDateString());
  const completedDates = notes
    .filter((n) => n.completed)
    .map((n) => new Date(n.completedAt).toDateString());
  const dueDates = notes
    .filter((n) => n.dueDate)
    .map((n) => new Date(n.dueDates).toDateString());
  const filteredNotesByDate = notes.filter((note) => {
    if (!note.createdAt) return false;
    return (
      new Date(note.createdAt).toDateString() === selectedDate.toDateString()
    );
  });
    
  const filteredNotes =
    filteredNotesByDate.length > 0 ? filteredNotesByDate : notes;
 
 
    return (
    <div>
      {" "}
      <div className=" p-4   bg-amber-50 bg-cover rounded-xl shadow">
        {" "}
        <h2 className="text-lg font-semibold mb-3">📅 Calendar</h2>{" "}
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date }) => {
            const d = date.toDateString();
            if (completedDates.includes(d))
              return "bg-green-400 text-white rounded-xl";
            if (dueDates.includes(d))
              return "bg-red-400 text-white rounded-xl";
            if (createdDates.includes(d))
              return "bg-blue-400 text-white rounded-xl";
          }}
        />{" "}
        
                
                {/* Notes list */}
        <div className="mt-4">
          {" "}
          <h3 className="font-semibold">Notes on this day:</h3>{" "}
          {filteredNotes.length === 0 ? (
            <p>No notes</p>
          ) : (
            filteredNotes.map((note) => (
              <div key={note._id} className="p-2 border-b">
                {" "}
                {note.title}{" "}
              </div>
            ))
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default NotesCalendar;
