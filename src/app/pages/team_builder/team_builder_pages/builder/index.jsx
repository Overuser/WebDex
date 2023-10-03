// import { usePokemon } from '../../../Provider';
// import Card from './builder_card';
import './builder.scss';

export const Builder = () => {
  // const { pokemons } = usePokemon();

  return (
    <div className='builder'>
      {/* <h1 className="builder__header">Builder Component</h1> */}
      <div className="builder__team">
        <div className="builder__team__member">
          <button>Add pokemon</button>
        </div>
        <div className="builder__team__member">
          <button>Add pokemon</button>
        </div>
        <div className="builder__team__member">
          <button>Add pokemon</button>
        </div>
        <div className="builder__team__member">
          <button>Add pokemon</button>
        </div>
        <div className="builder__team__member">
          <button>Add pokemon</button>
        </div>
        <div className="builder__team__member">
          <button>Add pokemon</button>
        </div>
      </div>
      {/* <div className='builder__content' >
        {  pokemons.map((pokemon) => {
            return (
              <Card pokemon={ pokemon } key={ pokemon.id } />
            );
        })}
      </div> */}
    </div>
  )
}
