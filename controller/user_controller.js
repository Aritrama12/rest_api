const user=require('../models/user_model')
const {v4:uuidv4}=require("uuid")
exports.getAllUser=async (req,res)=>{
    try{
          
        const getAlldata=await user.find()
        res.json({
            data:getAlldata
        })
    }catch(err){
        res.json({

            message:err.message
        })
    }
}
exports.getSingleData=async(req,res)=>{
   const id=req.params.id
   const getSingleData=await user.find({_id:id})
   res.json({
    data:getSingleData
   })
}

exports.createData=async(req,res)=>{
    try{
        const newUser=new user({
            id:uuidv4(),
            name:req.body.name,
            age:Number(req.body.age)
        })
      const createData= await newUser.save()
       res.json({
             data:createData
       })
    }catch(err){
         res.json({
            message:err.message
         })
    }
    
}

exports.updateData=async(req,res)=>{
    const id=req.params.id
    const updateData=await user.updateOne({_id:id},{
        $set:{
            age:req.body.age
        }
    })
    res.json({
        data:updateData
    })
}

exports.deleteData=async(req,res)=>{
   const id=req.params.id
   const deleteData=await user.deleteOne({_id:id})
   res.json({
    data:deleteData
   })
}