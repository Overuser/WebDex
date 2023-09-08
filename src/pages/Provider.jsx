import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

const PokemonContext = createContext([]);

const usePokemonFetch = () => {
  const [{ pokemons, search, pending, teams }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setPokemons":
          return { ...state, pokemons: action.payload, pending: false };
        case "setSearch":
          return { ...state, search: action.payload };
        case "setPending":
          return { ...state, pending: true };
        case "setTeams":
          return { ...state, teams: action.payload, pending: false };
        default:
          break;
      }
    },
    {
      pokemons: [],
      search: "",
      pending: true,
      teams: [],
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
      pokemon.name.english.toLowerCase().includes(search.trim().toLowerCase())
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

  useEffect(() => {
    fetch("http://localhost:5000/teams")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "setTeams",
          payload: data,
        });
      });
  }, []);

  return { pokemons: searchedPokemons, search, setSearch, pending, teams };
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
