const studentService=require("../service/service");
const addStudent=async(req,res)=>{
    try{
        const student=await studentService.createStudent(req.body);
        res.status(201).json({
            success:true,
            message:"student add successfully",
            data:student
        });
    }
    catch(err){
         res.status(500).json({
            success:false,
            error:err.message
            
        });
    }
};
const getStudent=async(req,res)=>{
    try{
         const student=await studentService.readStudent();
          res.status(200).json({
            success:true,
            message:"all student fetch successfully",
            data:student
        });
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:"student not get successfully",
            error:err.message
            
        });
    }
};
const fetchingStudent=async(req,res)=>{
    try{
        const {id}=req.params;
         const student=await studentService.fetchStudent(id);

        if (!student){
       return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }
          res.status(200).json({
            success:true,
            message:" student fetch successfully",
            data:student
        });
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:"student not get successfully",
            error:err.message
            
        });
    }
};

const fetchonlystudent=async(req,res)=>{
  try {
    const {studentId}=req.params;
    const student=await studentService.onlyStudent(studentId);

    if (!student){
      return res.status(404).json({
        success:false,
        message:"student not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student fetch successfully",
      data: student
    });
  } catch(err){
    return res.status(500).json({
      success:false,
      message:"Student not fetch",
      error:err.message
    });
  }
};
const updateStudent=async(req,res)=>{
    try{
        const {id}=req.params;
        const student=await studentService.editStudent(id,req.body);
        res.status(200).json({
            success:true,
            message:"student update successfully"
        });
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:"student has not update successfully",
            error:err.message
            
        });
    }
};
const deleteStudent=async(req,res)=>{
    try{
        const {id}=req.params;
        const student=await studentService.cutStudent(id);
        res.status(200).json({
            success:true,
            message:"student delete successfully"
        });
    }
      catch(err){
         res.status(500).json({
            success:false,
            message:"student has not deleted successfully",
            error:err.message
            
        });
    }
}
module.exports={addStudent,getStudent,updateStudent,deleteStudent,fetchingStudent,fetchonlystudent};