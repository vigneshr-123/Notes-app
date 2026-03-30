import express, { Router } from'express'
import { getNotes , createNote, deleteNotes ,updatenotes,completeNote } from '../controllers/noteController.js'

const router=express.Router()
router.get('/getNotes',getNotes)
router.post('/',createNote)
router.delete('/:id', deleteNotes)
router.put("/:id", updatenotes);
router.put("/notes/:id/complete", completeNote);



export default router
