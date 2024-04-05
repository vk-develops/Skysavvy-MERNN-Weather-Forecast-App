import { useEffect, useState } from "react";
import { useErrorToast } from "./useToast";

const useGetMultipleWeatherData = (urls) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const fetchPromises = urls.map(async (url) => {
                const response = await fetch(`${url}`);

                if (response.ok) {
                    const data = await response.json();
                    return data;
                }
            });

            const weatherData = await Promise.all(fetchPromises);
            setData(weatherData.filter((data) => data != null));
        } catch (err) {
            useErrorToast(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [urls]);

    return { data, isLoading };
};

export default useGetMultipleWeatherData;
