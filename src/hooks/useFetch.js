import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('could not fetch the data for that ressource');
            } else {
                return res.json();    
            }
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
        })
        .catch((err) => {
            setIsPending(false);
            setError(err.message);
        })
    },[url])

    return { data, isPending, error, setData, setIsPending, setError }
}
 
export default useFetch;