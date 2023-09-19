import {
  createContext,
  useEffect,
  useContext,
  useReducer
} from "react";
// import { Pokedex as PokeApi } from 'pokeapi-js-wrapper';


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
  }, [])

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

  // const getPokemons = async() => {
  //   const Pokedex = new PokeApi({
  //     cacheImages: true
  //   })

  //   try {
  //     (async () => {
  //       const golduck = await Pokedex.getPokemonSpeciesList()
  //       const results = golduck.results
  //       const gar = await results.map((result) => {
  //         return result.name
  //       })
  //       // console.log(gar)
  //       try {
  //         const pika = await Pokedex.getPokemonSpeciesByName(gar)
  //         console.log(pika);
  //       } catch (error) {
  //         console.log('pikachu defeated');
  //       }
  //     })()
  //   } catch (error) {
  //     console.log('error happened');
  //   }
  // }
  // getPokemons()

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
