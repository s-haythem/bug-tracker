//create a server
const express=require('express')
const app=express()
const cors=require('cors')
//dotenv 
require('dotenv').config()
//import the connect function
const connectDB=require('./config/connectDB')
connectDB()
//middleware
app.use(express.json())
app.use(cors())


//routes
app.use('/api/auth',require('./routes/users') )
app.use('/api/bugs',require('./routes/bugs'))
app.use('/api/projects',require('./routes/projects'))




//listen to the port 
const Port=5000
app.listen(Port,(err)=>{
    err? console.log(err): console.log(`the server is running on ${Port} `)
})

