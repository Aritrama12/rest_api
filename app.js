const express=require("express")
const userRouter=require('./routes/user_router')
require('./config/db')
const cors=require("cors")
const app=express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//GET: /api/user
//GET: /api/user/:id
//PUT: /api/user/:id
//POST: /api/user/:id
//DELETE: /api/user/:id


app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
 })
// file not found error
app.use((req,res,next)=>{
    res.json({
        message:"file not found"
    })
})

//server error
app.use((req,res,next,err)=>{
    res.json({
        message:"server error"
    })
})

module.exports=app

