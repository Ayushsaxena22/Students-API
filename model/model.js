const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    StudentId:{
        type:String,
        unique:true,
        required:true
    },
    email:{
         type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
  
   
});
module.exports=mongoose.model("Student",studentSchema);