import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // using data/db.json as database with "npx json-server --watch data/db.json --port 8000"
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
    });
    }, [url]);

    return {data, isPending}
}

export default useFetch;

