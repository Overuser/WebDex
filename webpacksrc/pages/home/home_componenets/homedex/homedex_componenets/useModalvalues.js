import { useCallback, useReducer } from "react";

export const useModalValues = () => {
  const [{ pokemon, isOpen, bottom, background, backdropFilter }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "openModal":
          return {
            ...state,
            isOpen: true,
            pokemon: action.payload,
            background: "rgba(0, 0, 0, 0.75)",
          };
        case "closeModal":
          return { ...state, bottom: "-600px", background: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" };
        case "afterOpen":
          return { ...state, bottom: "0px", backdropFilter: "blur(5px)" };
        case "afterClose":
          return { ...state, isOpen: false };
        default:
          break;
      }
    },
    {
      isOpen: false,
      pokemon: null,
      bottom: "-600px",
      background: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(5px)"
    }
  );

  const openModal = useCallback((pokemon) => {
    dispatch({
      type: "openModal",
      payload: pokemon,
    });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({
      type: "closeModal",
    });
    // setTimeout(() => {
    //   dispatch({
    //     type: "afterClose",
    //   });
    // }, 900);
    dispatch({
      type: "afterClose",
    });
  }, []);

  const afterOpen = useCallback(() => {
    dispatch({
      type: "afterOpen",
    });
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    pokemon,
    bottom,
    afterOpen,
    background,
    backdropFilter
  };
};
