import { Router } from "express";
import commentsModel from '.../DB/comments.model.js'
import jwt from 'jsonwebtoken'
const app = Router();

app.get('/', async (req,res)=>{
    const commentss = await commentsModel.findAll({
        attributes:['description','blogId','userId']
    })
    return res.status(200).json({message: "comments"});
    
});

app.delete('/delete', async (req,res)=>{
    const {token} = req.headers;
    const decode = jwt.verify(token,'');
    return res.json(decode);

   

    
    
});

app.put('/update', async (req,res)=>{
    const {description} = req.params;
    const {blogId} = req.body;
const {userId}=req.body;
    return res.json({description, blogId,userId});
});

export default app;
