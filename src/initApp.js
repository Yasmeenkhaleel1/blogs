
import connectDb from '../DB/connection.js';
import userRouter from './modules/user/user.router.js'
import blogRouter from './modules/blog/blog.router.js'
import commentsRouter from './modules/comments/comments.router.js'
import  cors from'cors';
export const initApp= (app,express)=>{
    connectDb();
    app.use(cors())
    app.use(express.json());
    app.use('/users',userRouter);
    app.use('/blogs',blogRouter);
    app.use('/comments',commentsRouter);
    app.use('*',(req,res)=>{
        return res.status(404).json({message:'page not found'});
    })
}