const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/q2").then((result)=>{
    console.log("connected");
    
}).catch((err)=>{
    console.log(err);
    
})
const empSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    sal:{
        type:Number,
        required:true

    }
})
const empModel =mongoose.model("emp",empSchema);
const app= express();

app.use(express.json());


app.get('/',async (req,resp)=>{
    const result=await empModel.find();

    console.log(result);
    resp.json(result);

})

// app.post("/emp/add",async(req,resp)=>{
//     const data= new empModel({
//         name:req.body.name,
//         sal:req.body.sal
//     })
//     const result= await data.save();
//     console.log(result);
//     resp.json(result);
// })

// app.put("/emp/update/:id",async(req,resp)=>{
//     try {
//         const emp= await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
//         console.log(emp);
//         resp.json(emp);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// })


app.delete("/emp/delete/:id",async(req,resp)=>{
    try {
        const empID= await empModel.deleteOne({_id:req.params.id});
        console.log(empID);
        resp.json(empID);
        
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(3000,()=>{
    console.log("running");
    
})