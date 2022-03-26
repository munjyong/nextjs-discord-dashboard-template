const fetcher = async (endpoint: string) => {
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
};

export default fetcher;
