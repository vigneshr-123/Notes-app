import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
import noteRouter from './routes/noteRoutes.js'

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/notes',noteRouter)


app.listen(process.env.PORT,() => {
    console.log(`Server started at port ${PORT}`)
})

connectDB()

  