import axios from 'axios';
import {useEffect, useState} from "react";

function useFetch(url){
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
        }catch (err){
            setLoading(false);
            setError(err.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {error, loading, data};

}

export default useFetch;