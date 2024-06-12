import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import cors from "cors";

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
// import UploadRoute from "./Routes/UploadRoute.js";
import ChatRoute from "./Routes/ChatRoute.js";
import MessageRoute from "./Routes/MessageRoute.js";

// Server Initialization
const app = express();

// CORS configuration
// For Cors Error
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// To serve images for public

// app.use(express.static('public'))
// app.use('/images', express.static("images"))


// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()

// DB Connection
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log("Listening")))
    .catch((err) => { console.log(err) })

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECERET
})

// Usage of routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)

// Cors error for post
app.options('/posts', cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use('/posts', PostRoute)

// This route was for storing post in system store using multer instead over a server
// app.use('/upload', UploadRoute)

app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)

// Unhandled Promise Rejection
// this detects if there is an connection error between server and db which goes unhandled
process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server due to unhandled Promise Rejection")

    server.close(() => {
        process.exit();
    })
})