import { Router, NextFunction, Request, Response } from 'express';
import userModel from '../models/user';
const md5 = require('md5');

const router = Router();

// Register
router.post('/signup', async (req : Request, res : Response, next : NextFunction) => {
    let response = '';

    let { username, age, status, region, kids, password } = req.body;
    
    if (username && status && region && age && kids && password) {
        req.body.password = md5(password);

        let newUser = new userModel(req.body);
        newUser.save();
        response = 'You were successfuly signed up. you can log in';
        
    } else {
        response = 'Make sure all of the fields are filled.';
    }

    res.send(response);
});

// Login
router.post('/login', async (req : Request, res : Response, next : NextFunction) => {
    let response = {
        success: false,
        msg: '',
        user: ''
    };

    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        // Check if username exists
        let user = await userModel.findOne({ username });
        
        if (user) {
            
            if (md5(password) == user.password) {
                response.success = true;
                response.user = JSON.stringify(user);
            } else {
                response.msg = 'Password is not correct';
            }
        } else {
            response.msg = 'Username does not exist';
        }
        
        // response = 'success';
    } else {
        response.msg = 'Make sure all of the fields are filled.';
    }

    res.json(response)
});

router.get('/:region', async (req : Request, res : Response, next : NextFunction) => {
    let { region } = req.params;
    let users = <any>[];

    if (region) {
        users = await userModel.find({ region });
    }

    res.json(users);
});

export default router;
