import { listModel } from "../models/pokemonList.js"

//Get All Pokemon Species
export const getALlPokemons = async ( request, response ) => {
  try {
    const list = await listModel.find({})
    response.status(200).json(list)
  } catch (error) {
    response.status(400).json({mssg: error.message})
  }
}

//Get Single Pokemon Species
export const getSinglePokemon = async ( request, response ) => {
  const { id } = request.params
  try {
    const list = await listModel.find({id: id})
    response.status(200).json(list)
  } catch (error) {
    response.status(400).json({mssg: error.message})
  }
}