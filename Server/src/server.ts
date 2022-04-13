import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import express, { NextFunction, Request, Response } from 'express';

const http = require('http');
const cors = require('cors');

import usersRoute from './routes/users';
import chatRoute from './routes/chat';
import recommendationsRoute from './routes/recommendations';
import { Server, Socket } from 'socket.io';

// Constants
const app = express();

const server = app.listen(4444);
const io = new Server(server);

let users = <any>[];
let admins = <any>[];

io.on('connection', (socket : Socket) => {
    socket.on('disconnect', () => {
    });

    socket.on('register', (user : any) => {
        user.socket = socket;

        if (user.user.isAdmin) {
            admins.push(user);
        } else {
            users.push(user);
        }
    });

    socket.on('message', ({ isAdmin, username, message }) => {
        if (isAdmin) {
            // Find user and send him the message
            users.forEach((userItem : any) => {
                if (userItem.user.username == username) {
                    userItem.socket.emit('message', message);
                }
            });
        } else {
            // Send message to all admins
            admins.forEach((adminItem : any) => {
                adminItem.socket.emit('message', message);
            });
        }
    })
});

mongoose.connect('mongodb+srv://SafeMeProject:1234@cluster0.vteyi.mongodb.net/SafeMe?retryWrites=true&w=majority');

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/users', usersRoute);
app.use('/chat', chatRoute);
app.use('/recommendations', recommendationsRoute);

export default app;
