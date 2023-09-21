import "./homedex_card.scss";

export default function Card ({ pokemon, openModal }) {
  // const image = require(`../../../../../../../assets/images/${String(
  //   pokemon.id
  // ).padStart(3, 0)}.png`);

  const handleClick = (event) => {
    event.preventDefault();
    openModal(pokemon);
  }

  return (
    <div key={pokemon.id} className='home__content__pokedex-card'>
      <div className='home__content__pokedex-card__image'>
        {/* <img src={ image } alt={ pokemon.name.english } height='100px' width='100px' /> */}
      </div>
      <div className='home__content__pokedex-card__name'>
        <span onClick={ handleClick } className="home__content__pokedex-card__name__name" >{pokemon.name.english.toUpperCase()}</span>
        <span className="home__content__pokedex-card__name__number" >{`#${String(pokemon.id).padStart(3, 0)}`}</span>
      </div>
      <div className='home__content__pokedex-card__types'>
        {pokemon.type.map((type, i) => {
          return (
            <span className={`Type ${type}`} key={i}>
              {type}
            </span>
          );
        })}
      </div>
      
    </div>
  );
}


