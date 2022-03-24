import express from 'express';
import * as admin from '../controller/adminController.js';

const adminRoute = express.Router();

adminRoute.post('/admin/updateUser', admin.updateUser);

export default adminRoute;