import './searchbar_style/searchbar.scss'

export const SearchBar = ({ search, setSearch }) => {
  
  const onChange = ( event ) => {
    event.preventDefault();
    setSearch(event.target.value)
  }

  return (
    <div className='home__searchbar__container'>
      <input
        name='search-bar'
        placeholder='search..'
        id='home__searchbar'
        type='search'
        value={ search }
        onChange={ onChange }
      />
    </div>
  );
};
