const AddPokemon = ({ onAdd, pokemon }) => {
  // if ( typeof(pokemon) === "object" ) {
  //   console.log( pokemon );
  // } else {
  //   console.log("nothing to see here");
  // }
  return ( 
    <div className="create__add-member__block" >
      {
        pokemon ? <p>{ pokemon.name.english }</p> : null
      }

      { pokemon ?
        null
        :
        <button onClick={ ( event ) => {
            event.preventDefault();
            onAdd() 
        }}>
          Add
        </button>
      }
    </div>
  );
}
export default AddPokemon;