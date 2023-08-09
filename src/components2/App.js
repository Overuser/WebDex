import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import DexDetails from "./DexDetails";
import TeamBuilder from "./TeamBuilder";
import TeamCreator from "./TeamCreator";
import RsideBar from "./RsideBar";
import LsideBar from "./LsideBar";
import { useState } from "react";
import useFetch from "../useFetch";

const App = () => {
  const {
    data: pokedex,
    isPending,
    error,
  } = useFetch("http://localhost:8000/pokemon");
  
  const [filterOption, setFilterOption] = useState([]);
  const [filteredPokedex, setFilteredPokedex] = useState(null);
  const [searchedPokedex, setSearchedPokedex] = useState(null);

  const handleFilteredSearch = (e) => {
    e.preventDefault();

    const searchWord = !!document.getElementById("home__searchbar")
      ? document.getElementById("home__searchbar").value.trim().toLowerCase()
      : "";
    const searchedPokedex = pokedex.filter((dex) => {
      return dex.name.english.toLowerCase().includes(searchWord);
    });
    const filtered = searchedPokedex.filter((dex) => {
      return dex.type.some((type) => filterOption.includes(type));
    });

    setFilteredPokedex(filtered);
    setSearchedPokedex(filtered);
  };

  const handleFilterOption = (e) => {
    const type = e.target.value;
    const unique = new Set(filterOption);

    if (unique.has(type)) {
      unique.delete(type);
      e.target.classList.toggle(type);

      setFilterOption([...unique]);
    } else {
      unique.add(type);
      e.target.classList.toggle(type);

      setFilterOption([...unique]);
    }
  };

  const toggleAll = () => {
    let buttonArray = [];
    const buttons = document.querySelectorAll(".filter__button");
    const unique = new Set(filterOption);

    buttons.forEach((button) => {
      buttonArray.push(button);
    });

    if (
      buttonArray.every((button) => {
        let type = button.value;
        return button.classList.contains(type);
      })
    ) {
      buttonArray.forEach((button) => {
        button.className = "filter__button";
      });

      setFilterOption([]);
    } else {
      buttonArray.forEach((button) => {
        let type = button.value;
        if (!button.classList.contains(type)) {
          button.classList.toggle(type);
        }

        if (!unique.has(type)) {
          unique.add(type);

          setFilterOption([...unique]);
        }
      });
    }
  };

  const clearFilter = () => {
    const buttons = document.querySelectorAll(".filter__button");
    const searchWord = !!document.getElementById("home__searchbar")
      ? document.getElementById("home__searchbar").value.trim().toLowerCase()
      : "";
    const searchedPokedex = pokedex.filter((dex) => {
      return dex.name.english.toLowerCase().includes(searchWord);
    });

    buttons.forEach((button) => {
      let type = button.value;

      if (button.classList.contains(type)) {
        button.classList.toggle(type);
      }
    });

    setFilterOption([]);
    setFilteredPokedex(null);
    setSearchedPokedex(searchedPokedex);
  };

  const handleSearch = () => {
    const searchWord = document
      .getElementById("home__searchbar")
      .value.trim()
      .toLowerCase();

    if (searchWord === "") {
      setSearchedPokedex(null);
    } else if (filteredPokedex) {
      const searchedPokedex = filteredPokedex.filter((dex) => {
        return dex.name.english.toLowerCase().includes(searchWord);
      });
      setSearchedPokedex(searchedPokedex);
    } else {
      const searchedPokedex = pokedex.filter((dex) => {
        return dex.name.english.toLowerCase().includes(searchWord);
      });
      setSearchedPokedex(searchedPokedex);
    }
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home
              handleSearch={handleSearch}
              handleFilterOption={handleFilterOption}
              handleFilteredSearch={handleFilteredSearch}
              isPending={isPending}
              error={error}
              pokedex={pokedex}
              filteredPokedex={filteredPokedex}
              filterOption={filterOption}
              searchedPokedex={searchedPokedex}
              toggleAll={toggleAll}
              clearFilter={clearFilter}
            />
          </Route>
          <Route exact path='/teambuilder'>
            <TeamBuilder
              handleFilterOption={handleFilterOption}
              handleFilteredSearch={handleFilterOption}
              toggleAll={toggleAll}
              clearFilter={clearFilter}
              filterOption={filterOption}
            />
          </Route>
          <Route exact path='/teamcreator'>
            <TeamCreator
              isPending={isPending}
              error={error}
              pokedex={pokedex}
              filterOption={filterOption}
              filteredPokedex={filteredPokedex}
              clearFilter={clearFilter}
              handleFilterOption={handleFilterOption}
              handleFilteredSearch={handleFilteredSearch}
              toggleAll={toggleAll}
              searchedPokedex={searchedPokedex}
            />
          </Route>
          <Route exact path='/pokemon/:id'>
            <Navbar />
            <div className='content'>
              <div className='Left-bar'>
                <LsideBar />
              </div>
              <div className='Main'>
                <DexDetails />
              </div>
              <div className='Right-bar'>
                <RsideBar
                  search={handleFilteredSearch}
                  handleFilterOption={handleFilterOption}
                  option={filterOption}
                  toggleAll={toggleAll}
                  clearFilter={clearFilter}
                />
              </div>
            </div>
          </Route>
          <Route path='*'>
            <div className='content'>
              <NotFound />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
