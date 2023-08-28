import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, controller.signal)
      .then((res) => {
        if (!res.ok) {
          throw new Error("could not fetch the pokemon for that ressource");
        } else {
          return res.json();
        }
      })
      .then((pokemon) => {
        setPokemon(pokemon);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });

    return controller.abort();
  }, [url]);

  return { pokemon, isPending, error, setPokemon, setIsPending, setError };
};

export default useFetch;
