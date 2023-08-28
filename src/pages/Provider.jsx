import {createContext, useEffect, useContext, useReducer, useCallback, useMemo } from "react";

const PokemonContext = createContext([]);

const usePokemonFetch = () => {
  const [{ pokemons, search }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setPokemons":
          return { ...state, pokemons: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
        default:
          break;
      }
    },
    {
      pokemons: [],
      search: "",
    }
  );

  const setSearch = useCallback((search) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const searchedPokemons = useMemo(() => {
    return pokemons.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(search)
    );
  }, [pokemons, search]);

  useEffect(() => {
    fetch("http://localhost:8000/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "setPokemons",
          payload: data,
        });
      });
  }, []);

  return { pokemons: searchedPokemons, search, setSearch };
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
