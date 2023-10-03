import useSearch from "../../hooks/useSearch";
import { usePokemon } from "../../Provider";
import Filter from "../../components/filter/Filter";
import Homedex from "./home_componenets/homedex";
import { SearchBar } from "./home_componenets/searchbar";
import "./home.scss";

const Home = () => {
  const { pokemons } = usePokemon();
  // const {
  //   search,
  //   setSearch,
  //   alteredPokemons,
  //   handleFilterOption,
  //   toggleAll,
  //   clearFilter,
  //   filter,
  //   option,
  // } = useSearch(pokemons);

  return (
    <div id='home' className='home'>
      <div className='home__header'>
        {/* <SearchBar search={search} setSearch={setSearch} />
        <Filter
          handleFilterOption={handleFilterOption}
          toggleAll={toggleAll}
          clearFilter={clearFilter}
          filter={filter}
          option={option}
        /> */}
      </div>
      { JSON.stringify(pokemons) }
      {/* <Homedex pokemons={alteredPokemons} pending={pending} /> */}
    </div>
  );
};

export default Home;
