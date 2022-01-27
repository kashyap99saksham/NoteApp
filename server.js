const express = require('express')
const app = express()
require('dotenv').config()
// console.log(process.env,"hiiiii")
const cors = require('cors')

const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())


// connection
const url = process.env.URL || 'mongodb+srv://saksham:saksham@cluster0.fkcj4.mongodb.net/notesDB?retryWrites=true&w=majority'
mongoose.connect(url,(err,res)=>console.log('congooo'))


// routes
app.use('/',require('./routes/noteRouter'))


app.listen(3001,()=>{
    console.log("Server is working fine");
})