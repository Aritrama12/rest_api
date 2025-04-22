const app=require('./app')
const port=4001
const hostname='127.0.0.1'



app.listen(port,hostname,()=>{
    console.log(`My server is http://${hostname}:${port}`)
})