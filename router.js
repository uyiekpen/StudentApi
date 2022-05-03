const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const {validateStudent} = require("./StudentValidation")

const Student = require("./DataBase")

router.get("/", async(req,res)=>{
    try{
       
        const GetData = await Student.find()
        res.status(200).json({
            message: "Data found successfully",
            data: GetData,

        })
    }catch(err){
        res.status(400).json({
            message: "Error",
            data: err.message
        })
    }
})

router.get("/:id", async(req,res)=>{
    try{
       
        const GetData = await Student.findById(req.params.id , req.body)
        res.status(200).json({
            message: "Data found successfully",
            data: GetData,

        })
    }catch(err){
        res.status(400).json({
            message: "Error",
            data: err.message
        })
    }
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  });

const upload = multer({storage: storage}).single("image")

router.post("/post", upload, async(req,res)=>{
    const {Name ,
        course,
        yearOfEntry,
        yearOfGraduation ,
        duration} = req.body
    try{
        const {error} =validateStudent(req.body)
        if(error){
            res.status(409).json({
                message: error.details[0].message
            })
        }else{
            
            const PostData = await Student.create({
                Name ,
                course,
                yearOfEntry,
                yearOfGraduation ,
                duration,
                avatar : req.file.path,
    
            })
    
            res.status(200).json({
                message: "Data found successfully",
                data: PostData,
            })
        }
          

    }catch(err){
        res.status(400).json({
            message: "Error",
            data: err.message
        })
    }
})

router.put("/:id", async (req ,res) => {
    
    try{
        const user = await Student.findOneAndUpdate(
         req.params.id, req.body )
        res.status(200).json({
            message: "Data updated successfully",
            data: user
        })

    }catch(err){
        res.status(400).json({
            message: "Error",
            data: err.message
        })
    }
})

router.delete("/:id", async(req, res) => {
    try{
        await Student.findByIdAndRemove(
           req.params.id, req.body)
        res.status(200).json({
            message: "deletedy",
            
        })

    }catch(err){
        res.status(400).json({
            message: "Error",
            data: err.message
        })
    }
})

module.exports = router