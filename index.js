//create a server
const express=require('express')
const app=express()
const cors=require('cors')
const path = require('path')
const Port= process.env.Port || 5000
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


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"/client/build")))
    app.get('*', (req,res)=> {
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}

//listen to the port 

app.listen(Port,(err)=>{
    err? console.log(err): console.log(`the server is running on ${Port} `)
})

