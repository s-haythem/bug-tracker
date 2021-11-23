const mongoose=require('mongoose');



 const Schema= mongoose.Schema;

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
         required : true
     }
 })

 

//  userSchema.pre('save', function(next) {
//     var user = this;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();

//     // generate a salt
//     bcrypt.genSalt(10, function(err, salt) {
//         if (err) return next(err);

//         // hash the password using our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });

 module.exports=User=mongoose.model('User',userSchema)
