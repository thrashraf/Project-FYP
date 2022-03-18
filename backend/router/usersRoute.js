import express from 'express';
import * as users from '../controller/usersController.js';



const usersRoute = express.Router();

usersRoute.post('/user/register', users.registerUser);

export default usersRoute