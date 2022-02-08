import express, { Application} from 'express';
import cors from 'cors';
import postRoute from './src/routes/postRoute';
import authRoute from './src/routes/authRoute';
import profileRoute from './src/routes/profileRoute';
import contactRoute from './src/routes/contactRoute';
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

//Initializing MongoDB connection
if(!process.env.DATABASE_URL){
  throw "Specify DATABASE_URL as enviromental variable";
}
if(!process.env.SECRET_JWT){
  throw "Specify SECRET_JWT as enviromental variable";
}
if(!process.env.EMAIL_USER){
  throw "Specify EMAIL_USER as enviromental variable";
}
if(!process.env.EMAIL_PASSWORD){
  throw "Specify EMAIL_PASSWORD as enviromental variable";
}
if(!process.env.EMAIL_TO_SEND){
  throw "Specify EMAIL_TO_SEND as enviromental variable";
}
void mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

//Check connection

db.once("open", () =>{
    console.log("Connected to MongoDB");
});

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/contact", contactRoute);

//Creating port variable from env variable or setting it mannualy

const PORT = process.env.PORT || 5010;


//Listening on the PORT variable and then console logging the port

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});