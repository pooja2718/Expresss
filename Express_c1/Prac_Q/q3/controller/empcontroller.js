const empModel = require('../Model/empModel.js')


const getEmp = async (req,resp)=>{
    try {
        const result= await empModel.find();
        resp.json(result);

        
    } catch (error) {
        console.log(error);
        
        
    }

}

const addEmp=async(req,resp)=>{
    try {
        const data= new empModel({
            name:req.body.name,
            sal:req.body.sal
        })
        const result= await data.save();
        console.log(result);
        resp.json(result);
        
    } catch (error) {
        console.log(error);
        
    }
}

const updateEmp=async(req,resp)=>{
    try {
        const emp= await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(emp);
        resp.json(emp);
        
        
    } catch (error) {
        console.log(error);
        
    }

}

const deleteEmp=async(req,resp)=>{
    try {
        const empID= await empModel.deleteOne({_id:req.params.id});
        console.log(empID);
        resp.json(empID);
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={getEmp,addEmp,updateEmp,deleteEmp}