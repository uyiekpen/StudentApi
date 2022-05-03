const mongoose = require('mongoose')
const url = 'mongodb://localhost/studentBlogDB'

mongoose.connect(url ,{
    useNewUrlParser : true
})

mongoose.connection
.on("open", (req, res)=>{
    console.log("Database is connected ")
})
    
.once("error", (req , res)=>{
    console.log("failed to connect")
})

module.exports = mongoose