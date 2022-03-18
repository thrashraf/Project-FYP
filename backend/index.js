import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

dotenv.config();

const port = 5000 || process.env.PORT;

//* import route
import usersRoute from './router/usersRoute.js';

const app = express();

//enable cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', usersRoute);


<<<<<<< HEAD
=======



>>>>>>> 3f3ebadd462a45e2aafbcd1588606f1ecc6f0c69
app.listen(port, console.log(`server running on port ${port}`))