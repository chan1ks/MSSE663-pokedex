import { MyPokemon } from '../models/pokemon.model';

export const getUserById = function(id, callback) {
    MyPokemon.findById(id, callback);
  }
  
export const getUserByName = function(name, callback) {
    const query = {name: name}
    MyPokemon.findOne(query, callback);
  }
  
export const addPokemon = function(pokemon, callback) {
     
     pokemon.save(callback);
      
  }
 