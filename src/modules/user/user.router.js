import { Router } from "express";
import userModel from '.../DB/user.model.js';



import jwt from 'jsonwebtoken'
const app = Router();

app.get('/', async (req,res)=>{
    const users = await userModel.findAll({
        attributes:['name','email']
    })
    return res.status(200).json({message: "users"});
    
});

app.delete('/delete', async (req,res)=>{
    const {token} = req.headers;
    const decode = jwt.verify(token,'');
    return res.json(decode);

    const {id} = req.params;
    return res.json(id);

    const user = await userModel.destroy({
        where: {
            id: id
        }
    });
});

app.put('/update', async (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    return res.json({id, name});
});

export default app;
