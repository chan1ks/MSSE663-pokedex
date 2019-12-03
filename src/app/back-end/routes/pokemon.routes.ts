import { Pokemon } from './../models/pokemon';
import {
         getUserByName,
         addPokemon
        }
          from '../controllers/pokemon.controller';
import { MyPokemon } from '../models/pokemon.model';

import express = require('express');



//Router definition

export const router = express.Router();


// add pokemon route
router.post('/add', (req, res, next) => {
  let pokemon = new MyPokemon({  
    name:req.body.name,
    type:req.body.type,
    height:req.body.height,
    weight:req.body.weight,
    gender:req.body.gender,
    category:req.body.category,
    abilities:req.body.abilites,
  });

  addPokemon(pokemon, (err, pokemon) => {
    if(err) {
      throw err;
      res.json({success: false, msg: 'Unable to add Pokemon, please try agian later!'});
    } else {
      res.json({success: true, msg: 'You added Pokemon successfuly!'});
    }
  });
});

// find pokemon by name route

router.get('/getbyname', (req, res, next) => {
  const name = req.body.name;
 
   getUserByName(name, (err, res) => {
     if(err) throw err;
     else
     res.json({success: true, msg: name});
  
   });
});

