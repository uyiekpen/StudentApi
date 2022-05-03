const mongoose = require("mongoose")

const StudentData = mongoose.Schema({
    Name : {
        type : String,
        required: true,

    },
    course: {
        type: String,
        required :true,

    }, 
    yearOfEntry: {
        type: Number,
        required :true,

    },
    yearOfGraduation: {
        type: Number,
        required :true,
    },
    duration: {
        type: Number,
        required :true,

    },
    avatar: {
        type: String,
        required :true,

    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Student = mongoose.model("Datas",StudentData)

module.exports = Student