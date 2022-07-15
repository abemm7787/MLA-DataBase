// console.log("Hello2")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
dotenv.config()




mongoose.connect(process.env.MONGO_URL)
.then(()=> 
{console.log("DB Conncetion is Successful")})
.catch((err)=>{
    console.log(err)
} ) 

app.get("/api/test", ()=>{
    console.log("Testing the boundaires of my database")
} )

app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.listen( process.env.PORT || 5000 , () =>{
    console.log("Backend server is running")
})