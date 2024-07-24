import { Router } from "express";
import userModel from './DB/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { where } from "sequelize";

const app=Router();
app.post('/', async (req,res)=>{
    const {name,email,password}=req.body;
    var passordHashed = bcrypt.hashSync("B4c0/\/", salt);
    await userModel.create({name,email,password:passordHashed});
    return res.status(201).json({message},'success');
});

app.post('/login', async (req,res)=>{
    const{email,password}=req.body;
    const user =await userModel.findOne({
        where:{
            email:email
        }
    });

    const checkPassword=bcrypt.compare(password,user.password);
    const checkUser= await userModel.findOne({
        where:{
            email:email,
            password:password 
        }
    });
    const token= jwt.sign({id:user.id,username:user.name},'pass');
    return res.json(token);
});

export default app;
