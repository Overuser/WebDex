import { usePokemon } from "../../../Provider";
import Pokeview from "./homedex_componenets/homedex_card/Pokeview";
import Card from "./homedex_componenets/homedex_card/homedex_card";
import Loader from "./homedex_componenets/homedex_card/homedex_loader";
import { useModalValues } from "./homedex_componenets/useModalvalues";
import './homedex_style/home-dex.scss';


const Homedex = () => {
  const { pokemons, pending } = usePokemon();
  const { isOpen , openModal, closeModal, pokemon } = useModalValues()


  return (
    <div id="home__content" className='home__content'>
      { pending ? <Loader /> :
        pokemons.map((pokemon) => {
            return (
              <Card pokemon={ pokemon } key={ pokemon.id } openModal={ openModal } />
            );
        })
      }
      <Pokeview 
        isOpen={ isOpen } 
        closeModal={ closeModal } 
        pokemon={ pokemon } />
    </div>
  );
};

export default Homedex;
