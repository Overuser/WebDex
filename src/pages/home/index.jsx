import { Homedex } from './home_componenets/homedex';
import { SearchBar } from './home_componenets/searchbar';
import './home_style/home.scss';

const Home = () => {

  return (
    <div className='home'>
      <div className='home__header'>
        <SearchBar />
      </div>
      <Homedex />
    </div>
  );
};

export default Home;