import {
  getUserByUsername,
  addUser, updateUser,
  compareCredential} from './../controllers/user.controller';
import { ApiUser } from './../models/user.model';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as config from '../config/database.config';


// Router definition

export const router = express.Router();


// Registration Route

router.post('/register', (req: any, res: any, next: any) => {
const user = new ApiUser({
username: req.body.username,
password: req.body.password,
favorites: req.body.favorites
});

addUser(user, (err: any, data: any) => {
if (err) {

res.json({success: false, msg: 'Unable to signup user,' + data + ' please try agian later!'});
next(err);
} else {
res.json({success: true, msg: 'Congratualtions! You signed up successfuly!'});
}
});
});

// Signin route

router.post('/login', (req: any, res: any, next: any) => {
const username = req.body.username;
const password = req.body.password;
getUserByUsername(username, (err: any, user: any) => {
if (err) {next(err); throw err;  }

compareCredential(password, user.password, (error: any, isMatch: any) => {
if (error) { throw error; }
if (isMatch) {
 const token = jwt.sign({data: user}, config.secret, {
   expiresIn: 604800 // 1 week time
 });
 res.json({
   success: true,
   token: 'JWT ' + token,
   user: {
     id: user._id,
     username: user.username,
     favorites: user.favorites
   }
 });
} else {
 return res.json({success: false, msg: 'Invalid username or password'});
}
});
});
});

// Update Profile route
router.put('/update/:id', updateUser);
