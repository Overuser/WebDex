import { useCallback, useMemo, useReducer, useState } from "react";

const useSearch = (pokemons) => {
  const [{ search, filterOption }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setSearch":
          return { ...state, search: action.payload };
        case "setFilterOption":
          return { ...state, filterOption: action.payload };
        default:
          break;
      }
    },
    {
      search: "",
      filterOption: [],
    }
  );

  const [option, setOption] = useState([]);

  const setSearch = useCallback((search) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const handleFilterOption = useCallback(
    (event) => {
      const type = event.target.value;
      const unique = new Set(option);

      if (unique.has(type)) {
        unique.delete(type);
        event.target.classList.toggle(type);

        setOption([...unique]);
      } else {
        unique.add(type);
        event.target.classList.toggle(type);

        setOption([...unique]);
      }
    },
    [option]
  );

  const toggleAll = useCallback(() => {
    const buttonArray = [...document.querySelectorAll(".filter__button")];
    const unique = new Set(option);

    if (
      buttonArray.every((button) => {
        const type = button.value;
        return button.classList.contains(type);
      })
    ) {
      buttonArray.forEach((button) => {
        button.className = "filter__button";
      });

      setOption([]);
    } else {
      buttonArray.forEach((button) => {
        const type = button.value;
        if (!button.classList.contains(type)) {
          button.classList.toggle(type);
        }

        if (!unique.has(type)) {
          unique.add(type);

          // dispatch({
          //   type: "setFilterOption",
          //   payload: [...unique]
          // });
          setOption([...unique]);
        }
      });
    }
  }, [option]);

  const clearFilter = useCallback(() => {
    const buttons = document.querySelectorAll(".filter__button");

    buttons.forEach((button) => {
      let type = button.value;

      if (button.classList.contains(type)) {
        button.classList.toggle(type);
      }
    });

    dispatch({
      type: "setFilterOption",
      payload: [],
    });
    setOption([]);
  }, []);

  const filter = useCallback(() => {
    dispatch({
      type: "setFilterOption",
      payload: [...option],
    });
  }, [option]);

  const alteredPokemons = useMemo(() => {
    if (filterOption.length) {
      return pokemons
        .filter((pokemon) =>
          pokemon.name.english
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        )
        .filter((pokemon) =>
          pokemon.type.some((type) => filterOption.includes(type))
        );
    } else {
      return pokemons.filter((pokemon) =>
        pokemon.name.english.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
  }, [pokemons, search, filterOption]);

  return {
    search,
    alteredPokemons,
    setSearch,
    handleFilterOption,
    toggleAll,
    clearFilter,
    filterOption,
    filter,
    option,
  };
};

export default useSearch;

