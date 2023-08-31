import { usePokemon } from "../../../Provider";
import Card from "./homedex_componenets/homedex_card";
import './homedex_style/home-dex.scss';

export const Homedex = () => {
  const { pokemons } = usePokemon();

  return (
    <div className='home__content'>
      {pokemons.map((pokemon) => {
        return (
          <Card pokemon={ pokemon } key={ pokemon.id } />
        );
      })}
    </div>
  );
};
