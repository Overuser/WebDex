import { usePokemon } from '../Provider';
import { SearchBar } from './home_componenets/searchbar';
import './home_style/home.scss';

const Home = () => {

  const { pokemons } = usePokemon();

  return (
    <div className='home'>
      <div className='home__header'>
        <h1 className='home__header__title'>Pokedex</h1>
        <SearchBar />
      </div>
      <div className='home__content' >
        { pokemons.map( (pokemon ) => {
            return (
              <div 
                key={ pokemon.id } 
              >
                { pokemon.name.english }
              </div>
            )
        }) }
      </div>
    </div>
  );
};

export default Home;