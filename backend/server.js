const express = require('express')
const app = express();
const morgan = require('morgan')

require("dotenv").config()

const dbConnect=require("./db");
PORT=4000

dbConnect(process.env.uri).then(()=>{
    app.listen(PORT,()=>{
        console.log(`db connected  server is running ${PORT}`)
    })
}).catch(err=>{
    console.log(err)
})

app.use(morgan("dev"))
app.use(express.json())   

app.use("/api/sleep", require("./routes/sleepRoutes"))
app.use("/api/user", require("./routes/userRoutes"))