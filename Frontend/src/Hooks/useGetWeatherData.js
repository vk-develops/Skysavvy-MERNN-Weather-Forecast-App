import { useEffect, useState } from "react";
import { useErrorToast } from "./useToast";

const useGetWeatherData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(`${url}`);

            if (response.ok) {
                const data = await response.json();

                setData(data);
            }
        } catch (err) {
            useErrorToast(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, isLoading };
};

export default useGetWeatherData;
