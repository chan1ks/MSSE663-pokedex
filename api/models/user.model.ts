import { User } from './user';
import {model, Schema} from 'mongoose';
import mongoose = require('mongoose');

// User Schema
const UserSchema = new Schema<User> ({

  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  favorites: []
});

export const ApiUser  =  model('User', UserSchema);

