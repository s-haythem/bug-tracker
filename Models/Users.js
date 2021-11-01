//require mongoose
const mongoose=require('mongoose');

 //require Schema from mongoose 
 const Schema= mongoose.Schema;
 //create the user schema

 const userSchema=Schema({
     name:{
         type:String,
         required:true
     },
     lastName:{
         type:String,
         required:true
     },
     phone: {
         type : String,
         required : true
     },
     address : {
         type : String
     },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:String,
         required:true
     },
     isAdmin : {
         type : Boolean,
         default : false
     },
     role : {
         type : String,
         enum : ["developer","client"]
     }
 })

 module.exports=User=mongoose.model('User',userSchema)
