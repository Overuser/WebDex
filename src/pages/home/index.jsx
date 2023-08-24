const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <h1 className='home__header__title'>Pokedex</h1>
        <div className='home__searchbar__container'>
          <input name='search-bar' id='home__searchbar' type='search' />
        </div>
      </div>
      <div className='home__content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum
        eaque exercitationem? Enim soluta explicabo quaerat quibusdam porro
        asperiores nulla laborum itaque ipsam sequi blanditiis corrupti
        veritatis, eligendi voluptas fuga!
      </div>
    </div>
  );
};

export default Home;
