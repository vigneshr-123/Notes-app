import express, { Router } from'express'
import { getNotes , createNote, deleteNotes ,updatenotes } from '../controllers/noteController.js'
import { updateNotes } from '../../frontend/src/features/NoteSlice.js'

const router=express.Router()
router.get('/getNotes',getNotes)
router.post('/',createNote)
router.delete('/:id', deleteNotes)
router.put("/:id", updatenotes);


export default router
