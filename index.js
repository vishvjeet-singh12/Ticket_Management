require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const database=require("./Database/database");
const router=require("./Router/router");
const ErrorMiddleware=require("./Middleware/ErrorMiddleware")
app.use(express.json());
app.use("/api",router);

database();
app.use(ErrorMiddleware);
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is run on 3000");
})
