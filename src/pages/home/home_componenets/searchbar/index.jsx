import './searchbar_style/searchbar.scss'

export const SearchBar = () => {
  return (
    <div className='home__searchbar__container'>
      <input
        name='search-bar'
        placeholder='search..'
        id='home__searchbar'
        type='search'
      />
    </div>
  );
};
