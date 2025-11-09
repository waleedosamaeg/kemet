import express from "express"
import authenticate from "../middlewares/authenticate.js"
const router = express.Router()


router.get("/ping" , (req , res) => res.send("pong"))

router.get(`/api/v1/token/verify` , authenticate , (req , res)=>{
    res.json({valid:true , data : req.profile})
})
// create generateToken endpoint for testing 
router.get("/api/v1/token/generate" , (req , res) =>{
    
})
export default router