import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const addNote = createAsyncThunk("notes/Addnote", async (formdata) => {
  const res = await axios.post("https://notes-app-4mbf.onrender.com/notes", {
    ...formdata,
  });
  return res.data;
});

export const getNotes = createAsyncThunk("notes/getnotes", async (userId) => {
  const res = await axios.get(
    `https://notes-app-4mbf.onrender.com/notes/getNotes?userId=${userId}`,
  );
  return res.data;
});
export const deleteNotes = createAsyncThunk("notes/deleteNotes", async (id) => {
  const res = await axios.delete(
    `https://notes-app-4mbf.onrender.com/notes/${id}`,
  );
  return res.data;
});

export const updateNotes = createAsyncThunk(
  "notes/updateNote",
  async ({ id, title, description }) => {
    const res = await axios.put(
      `https://notes-app-4mbf.onrender.com/notes/${id}`,
      {
        title,
        description,
      },
    );
    return res.data;
  },
);

export const completeNote = createAsyncThunk(
  "notes/completeNote",
  async (id) => {
    const res = await axios.put(
      `https://notes-app-4mbf.onrender.com/notes/${id}/complete`,
    );
    return res.data;
  },
);

const initialState = {
  notes: [],
  loading: false,
};

const NoteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      
      // to addNote
      .addCase(addNote.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          return alert(action.payload.error);
        } else {
          state.notes.push(action.payload)
          toast.success("Note added");
        }
      })


      // to getnote
      .addCase(getNotes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
        console.log(state.notes);
      })



      // to deleteNotes
      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.filter(
          (note) => note._id !== action.meta.arg,
        );
        toast("Deleted succesfully");
        // console.log(state.notes)
      })
      .addCase(deleteNotes.rejected, (state) => {
        toast.error("Delete failed");
      })


      // to updateNotes
      .addCase(updateNotes.fulfilled, (state, action) => {
        const index = state.notes.findIndex(
          (note) => note._id === action.payload._id,
        );
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
        toast.success("Note updated");
      })
      .addCase(updateNotes.rejected, () => {
        toast.error("Update failed");
      })


      // calander mark completeNote
      .addCase(completeNote.fulfilled, (state, action) => {
        const index = state.notes.findIndex(
          (note) => note._id === action.payload._id,
        );
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
        toast.success("Marked as complete");
      })
      .addCase(completeNote.rejected, () => {
        toast.error("Failed to mark as completed");
      });
  },
});

export default NoteSlice.reducer;
