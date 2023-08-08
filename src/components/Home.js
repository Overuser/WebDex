import { useState } from 'react';
import HomeDex from './HomeDex'
import Loading from './Loading';
import PokeInfo from './PokeInfo';
import LsideBar from './LsideBar';
import RsideBar from './RsideBar';

const Home = ({ 
  handleSearch,
  isPending, 
  error, 
  pokedex, 
  filteredDex, 
  searchDex,
  handleFilteredSearch,
  handleFilterOption,
  filterOption,
  toggleAll,
  clearFilter
  }) => {
  const [ pokemon, setPokemon ] = useState(null);
  const [ isClosed, setIsCLosed ] = useState(false);
  const [ bottom, setBottom ] = useState("-550px");

  const onClose = () => {
    setBottom("-550px");
    setIsCLosed( false )
  }
  
  const onOpen = () => {
    setBottom("0px")
  }

  const ModalView = ( pokemon ) => {
    setPokemon( pokemon );
    setIsCLosed( true )
  }

    return ( 
      <div className='content'>
        <div className='Left-bar'>
          <LsideBar />
        </div>
        <div className='Main'>
          <div className="home">
            <h1 className="home__title">Pokedex</h1>
            <div className="home__searchbar__container">
            <span><input name="search-bar" id="home__searchbar" type='search' onChange={ handleSearch } /></span>
            </div>
            {isPending && <Loading />}
            {error && <h2>{ error }</h2>}
            {pokedex && <HomeDex dexData={ searchDex ? searchDex : filteredDex ? filteredDex : pokedex } ModalView={ ModalView } />}
            <PokeInfo pokemon={ pokemon } isClosed={ isClosed } onClose={ onClose } onOpen={ onOpen } bottom={ bottom } />
          </div>
        </div>
        <div className='Right-bar'>
          <RsideBar 
          search={ handleFilteredSearch } 
          handleFilterOption={ handleFilterOption } 
          option={ filterOption } 
          toggleAll={ toggleAll } 
          clearFilter={ clearFilter } 
          />
        </div>
      </div>
    );
}
 
export default Home;

