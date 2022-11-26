const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan("combined"))
const port = 4000

app.get("/",(req,res)=>{
   return  res.send("heloo")
} )

app.listen(port ,()=>{
    console.log("listen https://localhost/"+port);
})
