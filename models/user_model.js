const mongoose=require("mongoose")
const { type } = require("os")

const user_schema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    
    age:{
        type:Number,
        required:true
    },
    
    date:{
        type:Date,
        default:Date.now
    }


})
const user_model=mongoose.model("student_details",user_schema)
module.exports=user_model