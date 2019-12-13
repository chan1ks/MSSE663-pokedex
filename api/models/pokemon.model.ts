import { Pokemon } from './pokemon';
import {model, Schema} from 'mongoose';
import mongoose = require('mongoose');

// Pokedex Schema
const PokedexSchema = new Schema<Pokemon> ({

  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  height: {
    type: Number,
    require: true
  },
  weight:{
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  abilities: {
    type: String,
    required: false
  }
});

export const MyPokemon  =  model('MyPokemon', PokedexSchema);

