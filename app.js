import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import * as path from "path";
import router from "./routes/api.js";
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODE,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./app/config/config.js"
import fileUpload from "express-fileupload";

const app = express();

app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODE}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload({limit:{fileSize: 50 * 1024 * 1024},}));

//Rate limiter
const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter);

//web cache
app.set('etag',WEB_CACHE)


// MONGODB CONNECTION

///

//set api route
app.use("/api",router)

//set application storage
app.use(express.static('storage'));


app.listen(PORT,()=>{
    console.log(`App run Successfully on ${PORT}`);
})
