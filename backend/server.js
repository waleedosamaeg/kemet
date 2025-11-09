import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import morgan from "morgan";
import router from "./endpoints/all.js"

const app = express();
process.env.MODE === "dev" ? app.use(morgan("dev")) : null
const corsOptions = {origin : "*" , method : ["GET" , "POST" , "OPTIONS"] , allowedHeaders : ["Authorization" ]}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)



app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`Server now is Running on port ${process.env.PORT} - default : 5000`)
})