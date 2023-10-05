import './Filter.scss'

const Filter = ({ handleFilterOption, toggleAll, clearFilter, filter, option }) => {

  return (
    <details id='detail' >
      <summary>Filter</summary>
      <div id="filter" >
        <div className="filter__buttons-wrapper">
          <button className="filter__button" onClick={ handleFilterOption } value='fire'>Fire</button>
          <button className="filter__button" onClick={ handleFilterOption } value='water'>Water</button>
          <button className="filter__button" onClick={ handleFilterOption } value='normal'>Normal</button>
          <button className="filter__button" onClick={ handleFilterOption } value='electric'>Electric</button>
          <button className="filter__button" onClick={ handleFilterOption } value='grass'>Grass</button>
          <button className="filter__button" onClick={ handleFilterOption } value='ice'>Ice</button>
          <button className="filter__button" onClick={ handleFilterOption } value='fighting'>Fighting</button>
          <button className="filter__button" onClick={ handleFilterOption } value='poison'>Poison</button>
          <button className="filter__button" onClick={ handleFilterOption } value='ground'>Ground</button>
          <button className="filter__button" onClick={ handleFilterOption } value='flying'>Flying</button>
          <button className="filter__button" onClick={ handleFilterOption } value='psychic'>Psychic</button>
          <button className="filter__button" onClick={ handleFilterOption } value='bug'>Bug</button>
          <button className="filter__button" onClick={ handleFilterOption } value='rock'>Rock</button>
          <button className="filter__button" onClick={ handleFilterOption } value='ghost'>Ghost</button>
          <button className="filter__button" onClick={ handleFilterOption } value='dragon'>Dragon</button>
          <button className="filter__button" onClick={ handleFilterOption } value='dark'>Dark</button>
          <button className="filter__button" onClick={ handleFilterOption } value='steel'>Steel</button>
          <button className="filter__button" onClick={ handleFilterOption } value='fairy'>Fairy</button>
        </div>
        <div className="filter__submit-container">
          { option.length > 0 ? <button className="filter__submit" onClick={ filter } >Filter</button > : <button className="filter__submit--disabled" disabled >Filter</button> }
        </div>
        <div className="filter__Toggle-all-wrapper">
          <button className="filter__Toggle-all-button" onClick={ toggleAll }>Toggle All</button>
        </div>
        <div className="filter__Clear-filter-wrapper">
          <button className="filter__Clear-filter-button" onClick={ clearFilter }>Clear</button>
        </div>
      </div>
    </details>
  )
}

export default Filter