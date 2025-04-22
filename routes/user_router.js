const express=require("express")
const { getAllUser, getSingleData, createData, updateData, deleteData } = require("../controller/user_controller")

const router=express.Router()
//GET: 
router.get('/',getAllUser)

//GET: /:id

router.get('/:id',getSingleData)

//POST :
router.post('/',createData)

//PUT : 

router.put('/:id',updateData)

//DELETE :

router.delete('/:id',deleteData)

module.exports=router