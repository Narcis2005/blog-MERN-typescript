import express, {Request, Response, Application} from 'express';
import cors from 'cors';
import postRoute from './routes/postRoute';
import authRoute from './routes/authRoute';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

//Initializing MongoDB connection
if(!process.env.DATABASE_URL){
  throw "Specify DATABASE_URL"
}
if(!process.env.SECRET_JWT){
  throw "Specify SECRET_JWT"
}
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

//Check connection

db.once("open", () =>{
    console.log("Connected to MongoDB");
})

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
//Creating port variable from env variable or setting it mannualy

const PORT = process.env.PORT || 5002;


//Listening on the PORT variable and then console logging the port

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})