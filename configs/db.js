const mongoose = require("mongoose");
require("dotenv").config()
const connectDB= async()=>{
   try{
       await mongoose.connect(process.env.MONGOOSE_KEY);
       console.log("DB Connected")
   }catch(err){
       console.log("DB not connect")
   }
}

module.exports = connectDB;