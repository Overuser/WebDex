import Pokeview from "./homedex_componenets/pokeview/Pokeview";
import Card from "./homedex_componenets/homedex_card/index";
import Loader from "./homedex_componenets/homedex_loader/index";
import { useModalValues } from "./homedex_utilities/useModalvalues";
import "./home-dex.scss";

const Homedex = ({ pokemons, pending }) => {
  const {
    isOpen,
    openModal,
    closeModal,
    pokemon,
    bottom,
    afterOpen,
    background,
  } = useModalValues();

  return (
    <div id='home__content' className='home__content'>
      {pending ? (
        <Loader />
      ) : (
        pokemons.map((pokemon) => {
          return (
            <Card pokemon={pokemon} key={pokemon.id} openModal={openModal} />
          );
        })
      )}
      <Pokeview
        isOpen={isOpen}
        closeModal={closeModal}
        pokemon={pokemon}
        bottom={bottom}
        background={background}
        afterOpen={afterOpen}
      />
    </div>
  );
};

export default Homedex;
