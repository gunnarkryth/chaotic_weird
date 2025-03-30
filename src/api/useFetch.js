import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export const useFetchContentful = (query={}) => {
    const [data, setData]=useState();
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    
    useEffect(()=>{
    setLoading(true)
    setError(null)
    client
    .getEntries(query)
    .then((response)=>{
        setData(response.items);
        setLoading(false);
    })
        .catch((err)=>{
            setError(err);
            setLoading(false);
        });
},[query])
return{data,loading,error}
}