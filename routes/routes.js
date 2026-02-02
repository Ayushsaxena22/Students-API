const express=require("express");
const router=express.Router();
const userController=require("../controller/controller");

router.post("/add-student",userController.addStudent);
router.get("/students",userController.getStudent);
router.get("/get-student-id/:id",userController.fetchingStudent);
router.put("/update-student/:id",userController.updateStudent);
router.delete("/delete-student/:id",userController.deleteStudent);
router.get("/get-student/:studentId",userController.fetchonlystudent);
module.exports=router;