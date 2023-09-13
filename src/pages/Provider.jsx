import {
  createContext,
  useEffect,
  useContext,
  useReducer
} from "react";

const PokemonContext = createContext([]);

const usePokemonFetch = () => {
  const [{ pokemons, pending, teams }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setPokemons":
          return { ...state, pokemons: action.payload, pending: false };
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
      pending: true,
      teams: []
    }
  );

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

  return { pokemons, pending, teams };
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
