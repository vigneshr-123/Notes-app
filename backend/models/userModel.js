import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    notes:[
            {
            type: mongoose.Schema.Types.ObjectId,
          ref: "notes"
            }
        ]

})


const userModel = mongoose.model('user',userSchema)


export default userModel