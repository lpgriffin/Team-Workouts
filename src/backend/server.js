
const express =require("express");
// const express = require("express");
const cors =require ("cors");
const mongoose =require( "mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
//app.use(cors());
url='mongodb+srv://spikeuser:tz52smdcowBAIy2H@cluster0.9dtiq.mongodb.net/test'

mongoose.connect(url).then();



//user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema);


//routes routes
app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"login sucess",user:user})
            }else{
                res.send({message:"wrong credentials",error:"wrong pw"})
            }
        }else{
            res.send({error:"not exist"})
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body)
    const {email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            try {
                // storing our user data into database
                const response =  User.create({
                    email,
                    password
                })
                return res.redirect('/');
            } catch (error) {
                console.log(JSON.stringify(error));
                if(error.code === 11000){
                    return res.send({status:'error',error:'email already exists'})
                }
                throw error
            }
        }
    })


})

app.listen(6969,()=>{
    console.log("started")
})