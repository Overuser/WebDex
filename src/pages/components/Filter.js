const Filter = ( { search, handleFilterOption, option, toggleAll, clearFilter } ) => {        
    return ( 
        <div id="filter" >
            <div className="filter__buttons-wrapper">
                <button className="filter__button" onClick={ handleFilterOption } value='Fire'>Fire</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Water'>Water</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Normal'>Normal</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Electric'>Electric</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Grass'>Grass</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Ice'>Ice</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Fighting'>Fighting</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Poison'>Poison</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Ground'>Ground</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Flying'>Flying</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Psychic'>Psychic</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Bug'>Bug</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Rock'>Rock</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Ghost'>Ghost</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Dragon'>Dragon</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Dark'>Dark</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Steel'>Steel</button>
                <button className="filter__button" onClick={ handleFilterOption } value='Fairy'>Fairy</button>
            </div>
            <div className="filter__submit-container">
                { option.length > 0 ? <button className="filter__submit" onClick={ search } >Filter</button > : <button className="filter__submit--disabled" disabled >Filter</button> }
            </div>
            <div className="filter__Toggle-all-wrapper">
                <button className="filter__Toggle-all-button" onClick={ toggleAll }>Toggle All</button>
            </div>
            <div className="filter__Clear-filter-wrapper">
                <button className="filter__Clear-filter-button" onClick={ clearFilter }>Clear</button>
            </div>
        </div>
     );
}
 
export default Filter;