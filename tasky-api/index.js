import cors from 'cors'; 
import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';  
import usersRouter from './api/users'; 
import moviesRouter from './api/movies';    
import authenticate from './authenticate';
import './db'; 


dotenv.config();

const app = express();

const port = process.env.PORT;

const errHandler = (err, req, res, next) => {
     /* if the error in development then send stack trace to display whole error,
     if it's in production then just send error message  */
     if(process.env.NODE_ENV === 'production') {
       return res.status(500).send(`Something went wrong!`);
     }
     res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
   };
app.use(express.json());
app.use('/api/tasks', tasksRouter); 
app.use('/api/users', usersRouter);   
app.use('/api/movies', moviesRouter); //ADD THIS BEFORE THE DEFAULT ERROR HANDLER. 
app.use('/api/movies',authenticate,  moviesRouter);
app.use(errHandler); 
app.use(cors());

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});