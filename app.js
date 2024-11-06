import express from "express";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors"
import rateLimit from "express-rate-limit";
import fileUpload from "express-fileupload";

import { MAX_JSON_SIZE , MONGODB_CONNECTION,PORT, REQUIST_LIMIT_NUMBER,REQUIST_LIMIT_TIME, URL_ENCODED, WEB_CACHE } from "./app/config/config.js";
import router from "./routes/api.js"

const app = express();

// Globle application middleware

app.use(cors())
app.use(express.json({limit: MAX_JSON_SIZE}))
app.use(express.urlencoded({extended: URL_ENCODED}))
app.use(hpp())
app.use(helmet())
app.use(cookieParser())
app.use(fileUpload({limit: { fileSize: 50*1024*1024}}))

// limier 

const limiter = rateLimit({
    windowMs: REQUIST_LIMIT_TIME,
    max: REQUIST_LIMIT_NUMBER
})
app.use(limiter)

// web caching 

app.set("etag", WEB_CACHE)

// connect mongodb 
// mongoose.connect(MONGODB_CONNECTION,{autoIndex:true}).then(()=>{
//     console.log("Connected to MongoDB");
// }).catch(err=>{
//     console.log("Error connecting to MongoDB");
// })


// router

app.use('/api',router)


// run this project 

app.listen(PORT , () => {
    console.log(`Project run successfully in ${PORT} port`)
})