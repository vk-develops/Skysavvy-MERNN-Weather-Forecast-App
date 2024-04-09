import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import WeatherInfo from "../../Components/WeatherInfo";
import { weatherImg } from "../../Data/weatherImg";
import HourlyForecastCard from "../../Components/HourlyForecastCard";

const WeatherDetailScreen = ({ route, navigation }) => {
    const { weatherData, locName } = route.params;

    const location = weatherData.location;
    const current = weatherData.current;

    const isDay = weatherData.current.is_day === 1;
    const timeOfDay = isDay ? "Day" : "Night";
    const image =
        weatherData.current.condition.text.replace(/\s/g, "") + timeOfDay;

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
                    <View className="pt-4">
                        <Text
                            className="text-2xl text-white text-center"
                            style={{ fontFamily: "plexSemiBold" }}
                        >
                            {location.name}, {location.region}
                        </Text>
                        <Text
                            style={{ fontFamily: "plexMedium" }}
                            className="text-[15px] text-slate-300 text-center pt-2"
                        >
                            Today, 15 Dec
                        </Text>
                    </View>
                    <View className="flex items-center justify-center mt-10">
                        <Image
                            className="h-[260px] w-[280px]"
                            source={weatherImg[image]}
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
                    <View className="my-8">
                        <HourlyForecastCard />
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default WeatherDetailScreen;
