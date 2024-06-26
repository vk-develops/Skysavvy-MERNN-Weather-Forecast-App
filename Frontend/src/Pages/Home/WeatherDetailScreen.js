import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import WeatherInfo from "../../Components/WeatherInfo";
import HourlyForecast from "../../Components/HourlyForecast";
import ReturnImgString from "../../Components/ReturnImgString";
import { newWeatherImg } from "../../Data/newWeatherImg";
import Loader from "../../Components/Loader";

const WeatherDetailScreen = ({ route, navigation }) => {
    const { locName } = route.params;

    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchWeatherReport = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${locName}`
            );

            if (response.ok) {
                const data = await response.json();

                setWeatherData(data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherReport();
    }, []);

    if (!weatherData) {
        return <Loader />;
    }

    const location = weatherData.location;
    const current = weatherData.current;

    const { image } = ReturnImgString(weatherData);

    const uri =
        newWeatherImg[image]?.uri ||
        `https:${weatherData.current.condition.icon}`;

    return (
        <ScrollView className="flex-1">
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <View className="px-5 my-8">
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View>
                            <View className="pt-4">
                                <Text
                                    className="text-2xl text-white text-center"
                                    style={{ fontFamily: "plexSemiBold" }}
                                >
                                    {location.name}, {location.region},{" "}
                                    {location.country}
                                </Text>
                                <Text
                                    style={{ fontFamily: "plexMedium" }}
                                    className="text-[15px] text-slate-300 text-center pt-4"
                                >
                                    Today, 15 Dec
                                </Text>
                            </View>
                            <View className="flex items-center justify-center mt-10">
                                <Image
                                    className="h-[260px] w-[280px]"
                                    source={{ uri }}
                                />
                            </View>
                            <View className="pt-4">
                                <Text
                                    style={{ fontFamily: "plexSemiBold" }}
                                    className="text-[22px] text-white text-center"
                                >
                                    {current.condition.text}
                                </Text>
                            </View>
                            <View>
                                <WeatherInfo
                                    wind={current.wind_kph}
                                    temp={current.temp_c}
                                    humid={current.humidity}
                                />
                            </View>
                            <View className="my-8 z-[5]">
                                <Text
                                    style={{ fontFamily: "plexSemiBold" }}
                                    className="text-white text-xl pb-3"
                                >
                                    Hourly Forecasts
                                </Text>
                                <HourlyForecast
                                    weatherData={weatherData}
                                    locName={locName}
                                />
                            </View>
                        </View>
                    )}
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default WeatherDetailScreen;
