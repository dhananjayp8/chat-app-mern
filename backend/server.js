const express=require('express');
const chats=require('./data/data.js')
const dotenv=require('dotenv');
const colors=require('colors');
const userRoutes=require("./routes/userRoutes.js")
const connectDB = require('./config/db.js');
const {notFound,errorHandler}=require("./middleware/errorMiddleware.js")
const app=express();
dotenv.config();

connectDB();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("API is running");
})
app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT||6060;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`.yellow.bold);
})