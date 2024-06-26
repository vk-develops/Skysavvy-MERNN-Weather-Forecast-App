import { ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecast = ({ locName, weatherData }) => {
    const [hourlyWeatherForecast, setHourlyWeatherForecast] = useState([]);
    const [time, setTime] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const fetchHourlyForecast = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_FORECAST}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${locName}`
            );

            if (response.ok) {
                const data = await response.json();
                const hourData = data.forecast.forecastday[0].hour;
                setHourlyWeatherForecast(hourData);
                setTime(data.location.localtime.split(" ")[1]);
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
        <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 0 }}
        >
            {isLoading ? (
                <ActivityIndicator />
            ) : hourlyWeatherForecast.length > 0 ? (
                hourlyWeatherForecast.map((forecast, index) => (
                    <HourlyForecastCard
                        key={index}
                        forecast={forecast}
                        time={time}
                    />
                ))
            ) : null}
        </ScrollView>
    );
};

export default HourlyForecast;
