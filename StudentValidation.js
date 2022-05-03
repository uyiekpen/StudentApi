const hapijoy = require("@hapi/joi")


const validateStudent = (data) =>{
    const StudentValid = hapijoy.object({
        Name : hapijoy.string(),
        course : hapijoy.string(),
        yearOfEntry : hapijoy.number(),
        yearOfGraduation : hapijoy.number(),
        yearOfGraduation : hapijoy.number(),
        duration : hapijoy.number()
    })
    return StudentValid.validate(data)
}
module.exports.validateStudent = validateStudent


