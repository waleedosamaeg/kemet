import jwt from "jsonwebtoken"


function authenticate(req , res , next) { 

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")) return  res.status(401).json({valid:false , message : "no token provided"})
    const token = authHeader.split(" ")[1]
   
    jwt.verify(token , process.env.JWT_SECRET  , {"algorithms" : ["HS256"] } , (err , decoded)=>{
        if (err) return res.status(403).json({valid : false , message : "invalid Token"})
        req.profile = decoded
        next()

    })

}
export default authenticate;