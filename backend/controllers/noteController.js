import noteModel from "../models/noteModel.js";
import dotenv from "dotenv";

dotenv.config();

export const getNotes = async (req, res) => {
  console.log("QUERY:", req.query);
  const { userId } = req.query;
  const notes = await noteModel.find({ owner: userId });
  return res.json(notes);
};

export const createNote = async (req, res) => {
  console.log(req.body);
  const { title, description, owner,dueDate } = req.body;
  if (!title || !description) {
    return res.json({ message: "all fields are required" });
  }
  const note = await noteModel.create({
    title,
    description,
    owner,
    dueDate
  });
  return res.json({ message: "Note created successfully", note });
};

export const updatenotes = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatenotes = await noteModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true },
    );
    return res.json(updatenotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await noteModel.findById(id);
    if (!note) {
      return res.json({ message: "No notes find to delete" });
    }
    await noteModel.findByIdAndDelete(id);

    return res.json({ message: "Note deleted succesfully" });
  } catch (error) {
    return res.json({ message: "invalid notes" });
  }
};


export const completeNote = async (req, res) => {
  const note = await noteModel.findById(req.params.id)
  if (!note) return res.status(404).json({ message: "note not found" })
  
  note.completeAt = true;
  note.completedAt = new Date();
  await note.save();
  res.json(note)
  


}
