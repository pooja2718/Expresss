const mongoose = require('mongoose');

const empSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    sal:{
        type:String,
        require:true
    }
})

const empModel= mongoose.model("emp",empSchema);
module.exports= empModel