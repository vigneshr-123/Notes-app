import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const addNote = createAsyncThunk("notes/Addnote", async (formdata) => {
  const res = await axios.post("http://localhost:5000/notes", { ...formdata });
  return res.data;
});

export const getNotes = createAsyncThunk("notes/getnotes", async (userId) => {
  const res = await axios.get(
    `http://localhost:5000/notes/getNotes?userId=${userId}`,
  );
  return res.data;
});
export const deleteNotes = createAsyncThunk("notes/deleteNotes", async (id) => {
  const res = await axios.delete(`http://localhost:5000/notes/${id}`);
  return res.data;
});

export const updateNotes = createAsyncThunk(
  "notes/updateNote",
  async ({ id, title,description }) => {
    const res = await axios.put(`http://localhost:5000/notes/${id}`, {
      title,
      description,
    });
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

      .addCase(addNote.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          return alert(action.payload.error);
        } else if (action.payload.message) {
          toast.success(action.payload.message);
        }
        
      })

      .addCase(getNotes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
        console.log(state.notes);
      })

      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = state.notes.filter(
          (note) => note._id !== action.meta.arg,
        );
        toast("Deleted succesfully")
        // console.log(state.notes)
      })
      .addCase(deleteNotes.rejected, (state) => {
        toast.error("Delete failed");
      })

      .addCase(updateNotes.fulfilled, (state, action) => {
        const index = state.notes.findIndex(
          (note) => note._id === action.payload._id,
        );
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
      });
  },
});

export default NoteSlice.reducer;
