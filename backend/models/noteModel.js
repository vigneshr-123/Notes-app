import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:"true"
    }
})


const noteModel = mongoose.model('notes',noteSchema)


export default noteModel