const express = require("express")
const connectDB = require("./configs/db")
const app = express();
const router = require("./routes/library.routes")

app.use(express.json());

connectDB();
app.use("/", router)
app.use("",(req, res)=>{
   res.status(404).json({
    err:"Page Not Found"
   })
})

app.listen(3000,()=>{
    console.log("server started port http://localhost:3000");
})