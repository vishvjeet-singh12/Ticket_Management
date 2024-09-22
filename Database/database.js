const mongoose=require("mongoose");

const URI=process.env.MongoDB_URI;
const database=()=>{
    mongoose.connect(URI).then(()=>{
console.log("Database is connected");
}).catch((err)=>{
    console.log(err);
})
}
module.exports=database;
