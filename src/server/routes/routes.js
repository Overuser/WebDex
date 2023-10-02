import express from "express";
import { getALlSpecies, getSingleSpecie } from "../controllers/speciesController.js";
import { getALlPokemons, getSinglePokemon } from "../controllers/listController.js";

export const router = express.Router();

//Get all pokemon Species
router.get('/species', getALlSpecies)

//Get a single pokemon Specie
router.get('/species/:id', getSingleSpecie)

//Get all pokemonList
router.get('/list', getALlPokemons)

//Get a single pokemon
router.get('/list/:id', getSinglePokemon)


