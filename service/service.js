const Student=require("../model/model");
const createStudent=async(data)=>{
    return await Student.create(data);
}
const readStudent=async()=>{
    return await Student.find();
}
const fetchStudent=async(id)=>{
    return await Student.findById(id);
}
const onlyStudent=async(studentId)=>{
    return await Student.findOne({StudentId: studentId} );
}
const editStudent=async(id,data)=>{
    return await Student.findByIdAndUpdate(id,data,{new:true});
}
const cutStudent=async(id)=>{
    return await Student.findByIdAndDelete(id);
}

module.exports = {
  createStudent,
  readStudent,
  fetchStudent,
  onlyStudent,
  editStudent,
  cutStudent
};
