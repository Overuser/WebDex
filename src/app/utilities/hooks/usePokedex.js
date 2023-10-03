import { useQuery } from "@tanstack/react-query"
import { Pokedex } from 'pokeapi-js-wrapper';

const usePokedex = () => {
  const Dex = new Pokedex({
    cache: true
  })

  const getAllSpecies = async () => {
    console.time('getspecies')
    console.timeLog('getspecies', 'start')
    const species = await Dex.getPokemonSpeciesList()
    console.timeLog('getspecies', 'first')
    const results = await species.results
    console.timeLog('getspecies', 'second')
    const data = await Dex.getPokemonSpeciesByName(results.map(result => result.name))
    console.timeEnd('getspecies', 'done')
    return data
  }

  const getAll = async () => {
    console.time('getall')
    console.timeLog('getall', 'start')
    const species = await Dex.getPokemonsList()
    console.timeLog('getall', 'first')
    const results = await species.results
    console.timeLog('getall', 'second')
    const data = await Dex.getPokemonByName(results.map(result => result.name))
    console.timeEnd('getall', 'done')
    return data
  }

  // const getAllSpecies = async () => {
  //   const species = await Dex.getPokemonSpeciesList();
  //   const results = species.results.map(result => result.name);
  //   const speciesData = await Promise.all(results.map(name => Dex.getPokemonSpeciesByName(name)));
  //   return speciesData;
  // };
  
  // const getAll = async () => {
  //   const species = await Dex.getPokemonsList();
  //   const results = species.results.map(result => result.name);
  //   const pokemonData = await Promise.all(results.map(name => Dex.getPokemonByName(name)));
  //   return pokemonData;
  // };
  
  return useQuery({
    queryKey: ['pokedex'],
    queryFn: async () => {
      console.time('fetch')
      console.time('start')
      const species = await getAllSpecies()
      const list = await getAll()
      console.timeEnd('fetch', 'done')
      return { species, list }
    },
    networkMode: "always"
  }).data
}

export default usePokedex
