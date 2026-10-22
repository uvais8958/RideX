const dotenv=require('dotenv');
dotenv.config();

const express=require('express');
const cors=require('cors');
const app=express();
const userRoutes=require("./routes/user.route.js");
const cookieParser=require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("hellow world");
});

app.use('/users',userRoutes);
module.exports=app;
