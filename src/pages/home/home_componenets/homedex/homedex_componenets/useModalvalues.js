import { useCallback, useReducer } from "react";

export const useModalValues = () => {
  const [{ pokemon, isOpen }, dispatch] = useReducer(
    (state, action) => {
      switch(action.type) {
        case "openModal":
          return { ...state, isOpen: action.payload, pokemon: action.pokemon }
        case "closeModal":
          return { ...state, isOpen: action.payload, pokemon: null }
        default:
          break 
      }
    },{
      isOpen: false,
      pokemon: null
    })

    const openModal = useCallback((pokemon) => {
       dispatch({
        type: "openModal",
        payload: true,
        pokemon: pokemon
      })
    }, [])

    const closeModal = useCallback(() => {
      dispatch({
        type: "closeModal",
        payload: false
      })
    }, [])

  return { isOpen, openModal, closeModal, pokemon }
}

