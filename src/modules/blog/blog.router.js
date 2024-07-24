import { Router } from "express";


import jwt from 'jsonwebtoken'
const app = Router();

app.get('/', async (req,res)=>{
    try{
const blogs= blogModel.findAll();
return res.status(200).json({message:"success",blogs});
    }
    catch(error){
        return res.status(500).json({message:"erro",error});
    }

});


export default app;
