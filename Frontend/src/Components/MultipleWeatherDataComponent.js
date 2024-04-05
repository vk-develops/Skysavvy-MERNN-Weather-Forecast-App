import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import useGetMultipleWeatherData from "../Hooks/useGetMultipleWeatherData";
import MiniWeatherCard from "./MiniWeatherCard";

const MultipleWeatherDataComponent = () => {
    // const [multipleWeatherData, setMultipleWeatherData] = useState([]);
    // const cities = ["Beijing", "Mexico"];

    // const urls = cities.map(
    //     (city) =>
    //         `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${city}`
    // );

    // const { data, isLoading } = useGetMultipleWeatherData(urls);
    // useEffect(() => {
    //     if (data) {
    //         setMultipleWeatherData(data);
    //     }
    // }, [data]);

    const [weatherDataArray, setWeatherDataArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${city}`
            );
            if (response.ok) {
                const data = await response.json();

                return data;
            }
        } catch (error) {
            console.log(error);
        }
        return null;
    };

    useEffect(() => {
        const cities = ["Mexico", "Paris", "Tokyo"];
        const fetchDataForCities = async () => {
            const weatherDataPromises = cities.map((city) =>
                fetchWeatherData(city)
            );
            const weatherDataResults = await Promise.all(weatherDataPromises);
            setWeatherDataArray(
                weatherDataResults.filter((data) => data !== null)
            );
            setLoading(false);
        };
        fetchDataForCities();
    }, []);

    return (
        <View>
            {loading && <ActivityIndicator />}
            {weatherDataArray.length
                ? weatherDataArray.map((weatherInfo, index) => (
                      <MiniWeatherCard key={index} />
                  ))
                : null}
        </View>
    );
};

export default MultipleWeatherDataComponent;
