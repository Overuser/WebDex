import {
  createContext,
  useContext
} from "react";
import { useQuery } from "@tanstack/react-query"

const PokemonContext = createContext([]);

const usePokemonFetch = () => {
  const { data:pokemons, isSuccess,  isError, error, isFetching } = useQuery({
    queryKey: ['pokedex'],
    queryFn: () => fetch("http://localhost:5000/api/list").then(response => response.json()).then( data => data ),
    networkMode: "always",
    initialData: [],
    cacheTime: Infinity
  })

  return { pokemons, isFetching, isSuccess,  isError, error };
};

export const PokemonProvider = ({ children }) => {
  return (
    <PokemonContext.Provider value={usePokemonFetch()}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
