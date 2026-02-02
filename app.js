const express=require("express");
const mongoose=require("mongoose");
const userRoutes=require("./routes/routes");
const app=express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err));
app.use("/api",userRoutes);
module.exports=app;