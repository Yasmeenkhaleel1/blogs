import { Sequelize } from "sequelize";

const sequelize = new Sequelize('freedb_blog_db', 'freedb_yasmeen', 'R@BJ4nZAt#7Kr96', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect:'mysql'
  });
  export const connectDb=()=>{
    return  sequelize.sync({alter:false});
  }
  export default connectDb;