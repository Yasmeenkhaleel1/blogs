import { DataTypes, Sequelize} from "sequelize";
import {sequelize} from './connection'
import userModel from "./user.model";

const blogModel= sequelize.define('Blog',
    {
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
            unique:true,
        },
       description:{
        type:DataTypes.STRING,
        allowNull:false,
       
       } ,
      category:{
        type:DataTypes.STRING(100),
        allowNull:false,
       
       } ,
  
    });
    blogModel.belongsTo(userModel);
    userModel.hasMany(blogModel);
export default blogModel;