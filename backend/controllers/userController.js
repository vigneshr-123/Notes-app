import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        if (!username || !email || !password) {
            return res.json({ error: "Fill all fields" })
        }
        const userwithemail = await userModel.findOne({ email })
        if (userwithemail) {
            return res.json({ error: "User with this email already exist" })
        }

        const userwithusername = await userModel.findOne({ username })
        if (userwithusername) {
            return res.json({ error: "User with this username already exist" })
        }

        const hashedpassword = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            username,
            email,
            password: hashedpassword
        })

        return res.json({ message: "User created successfully" })

    } catch (error) {
        return res.json(error)
    }
}


export const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({ error: "Fill all fields" })
    }
    const user = await userModel.findOne({ email }).select('+password')
    if (!user) {
        return res.json({ error: "User is not registered" })
    }
    let valid = await bcrypt.compare(password, user.password)
    if (!valid) {
        return res.json({ error: "Invalid credentials" })
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    const currentuser = {
        id:user._id,
        name: user.username,
        email: user.email
    }

    return res.json({ message: "logged in", token, currentuser })

}