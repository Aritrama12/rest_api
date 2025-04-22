const config=require('./config')
const mongoose=require("mongoose")

const DBURL=config.db.url
mongoose.connect(DBURL)
.then(()=>{
    console.log("Db is connected")
})
.catch((err)=>{
    console.log("db is not connected")
    console.log(err)
    process.exit(1)
})