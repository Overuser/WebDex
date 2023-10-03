import { useCallback, useReducer } from "react";

export const useModalValues = () => {
  const [{ pokemon, isOpen, bottom, background }, dispatch] = useReducer(
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
          return { ...state, bottom: "-600px", background: "rgba(0, 0, 0, 0)" };
        case "afterOpen":
          return { ...state, bottom: "0px" };
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
    setTimeout(() => {
      dispatch({
        type: "afterClose",
      });
    }, 900);
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
  };
};
