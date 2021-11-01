const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const projectSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required :true
    },
    deliveryTime : {
        type : String,
        required : true
    }

})

module.exports=Project=mongoose.model('Project',projectSchema)