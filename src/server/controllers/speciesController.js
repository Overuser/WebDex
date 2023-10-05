import { specieModel }  from '../models/pokemonSpecies.js'

//Get All Pokemon Species
export const getALlSpecies = async ( request, response ) => {
  try {
    const species = await specieModel.find({})
    response.status(200).send(species)
  } catch (error) {
    response.status(400).json({mssg: error.message})
  }
}

//Get Single Pokemon Species
export const getSingleSpecie = async ( request, response ) => {
  const { id } = request.params
  try {
    const species = await specieModel.find({id: id})
    response.status(200).json(species)
  } catch (error) {
    response.status(400).json({mssg: error.message})
  }
}