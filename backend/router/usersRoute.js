import express from 'express';
import * as users from '../controller/usersController.js';
import { verifytoken } from '../middleware/verifytoken.js';


const usersRoute = express.Router();

usersRoute.post('/user/register', users.registerUser);
usersRoute.post('/user/login', users.loginUser )

export default usersRoute