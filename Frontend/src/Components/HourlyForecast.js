import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecast = ({ locName }) => {
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchHourlyForecast = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_FORECAST}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${locName}`
            );

            if (response.ok) {
                const data = await response.json();

                setHourlyForecast(data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchHourlyForecast();
    }, []);

    return (
        <ScrollView>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                hourlyForecast.map((forecast, index) => (
                    <HourlyForecastCard
                        key={index}
                        forecast={forecast}
                    />
                ))
            )}
        </ScrollView>
    );
};

export default HourlyForecast;
