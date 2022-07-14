// console.log("Hello2")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config()

    mongoose.connect("mongodb+srv://RedApple87:a9rp1GuVHxKZOCnF@cluster0.ca6bj.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> 
    {console.log("DB Conncetion is Successful")})
    .catch((err)=>{
        console.log(err)
    } ) 

app.listen( process.env.PORT || 5000 , () =>{
    console.log("Backend server is running")
})