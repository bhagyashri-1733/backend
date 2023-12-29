import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import userRouter from './routes/user.routes.js'

const app = express()

app.use(cors({
    origin: process.env.CROS_ORIGIN,
    credentails :true,
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended :true,limit:"160kb"}))
app.use(express.static("public"))
app.use(cookieParser())



app.use("/api/v1/users",userRouter)

//http://localhost:8000/users/login/api/v1/users/register
export {app}