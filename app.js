require("./Db")
const express = require("express")
const port = 2144
const app = express()
const mongoose = require("mongoose")
const path = require("path")
app.use(express.json())
const mutler = require("multer")


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/",require("./router"))


app.listen(port,()=>{
    console.log(`app is listening ${port}`)
})