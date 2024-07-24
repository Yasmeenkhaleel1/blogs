import { DataTypes, Sequelize} from "sequelize";
import {sequelize} from './connection'

const userModel= sequelize.define('User',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
       email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
       } ,
       password:{
        type:DataTypes.STRING,
        allowNull:false,
       },
       confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
       }
    });
export default userModel;