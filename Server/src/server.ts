import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
const cors = require('cors');
import express, { NextFunction, Request, Response } from 'express';

import usersRoute from './routes/users';


// Constants
const app = express();
mongoose.connect('mongodb+srv://SafeMeProject:1234@cluster0.vteyi.mongodb.net/SafeMe?retryWrites=true&w=majority');

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/users', usersRoute);

export default app;
