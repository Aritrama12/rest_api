require('dotenv').config()

const dev={
    app:{
        port:process.env.PORT||4001
    },
    db:{
        url:process.env.DB_URL||'mongodb://localhost:27017/collegeDB'
    }
}
module.exports=dev