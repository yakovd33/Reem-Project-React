import { Router, NextFunction, Request, Response } from 'express';
import messsageModel from '../models/message';
const router = Router();

interface message {
    username: string;
    isAdmin: boolean;
    toUsername: string;
    message: string;
    createdAt: string;
}

router.get('/messages/:username', async (req : Request, res : Response, next : NextFunction) => {
    let { username } = req.params;

    let messages = <any>[];

    let messagesQuery = await messsageModel.find({ $or: [ { username }, { toUsername: username } ] });    

    messagesQuery.forEach((message : message) => {
        messages.push({
            username: message.username,
            isAdmin: message.isAdmin,
            message: message.message,
            date: message.createdAt
        })
    });
    
    res.send(messages)
});

router.post('/send/', async (req : Request, res : Response, next : NextFunction) => {
    let { message } = req.body;
    

    if (message) {
        let newMessage = new messsageModel(req.body);
        newMessage.save();        
    }

    res.send('')
});

router.get('/open_chats/', async (req : Request, res : Response, next : NextFunction) => {
    let chats = await messsageModel.find().distinct('username');
    res.json(chats);
});

router.get('/messages/admin/:username', async (req : Request, res : Response, next : NextFunction) => {
    let { username } = req.params;

    let messages = <any>[];

    let messagesQuery = await messsageModel.find({ $or: [ { username }, { toUsername: username } ] });    

    messagesQuery.forEach((message : message) => {
        messages.push({
            username: message.username,
            isAdmin: message.isAdmin,
            message: message.message,
            date: message.createdAt
        })
    });
    
    res.send(messages)
});

export default router;