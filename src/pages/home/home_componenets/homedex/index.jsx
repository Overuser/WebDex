import { usePokemon } from "../../../Provider";
import Card from "./homedex_componenets/homedex_card/homedex_card";
import Loader from "./homedex_componenets/homedex_card/homedex_loader";
import './homedex_style/home-dex.scss';

const Homedex = () => {
  const { pokemons, pending } = usePokemon();

  return (
    <div className='home__content'>
      { pending ? <Loader /> :
        pokemons.map((pokemon) => {
            return (
              <Card pokemon={ pokemon } key={ pokemon.id } />
            );
        })
      }
    </div>
  );
};

export default Homedex;
