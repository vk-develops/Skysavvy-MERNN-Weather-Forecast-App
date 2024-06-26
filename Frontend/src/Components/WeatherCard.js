import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ReturnImgString from "./ReturnImgString";
import { newWeatherImg } from "../Data/newWeatherImg";

const WeatherCard = ({ onPress, weatherData }) => {
    const { image } = ReturnImgString(weatherData);

    const uri =
        newWeatherImg[image]?.uri ||
        `https:${weatherData.current.condition.icon}`;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="px-5 pb-5 rounded-lg relative"
        >
            <Text
                style={{ fontFamily: "plexBold" }}
                className="text-[75px] text-white mt-2"
            >
                {weatherData.current.temp_c}&deg;
            </Text>
            <View className="absolute top-5 right-5">
                <Image
                    source={{ uri }}
                    className="h-[160px] w-[160px]"
                />
            </View>
            <View className="mt-5">
                <View className="flex items-center justify-start flex-row gap-2">
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-sm text-white"
                    >
                        H:{weatherData.current.humidity}
                    </Text>
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-sm text-white"
                    >
                        UV:{weatherData.current.uv}
                    </Text>
                </View>
                <View className="flex items-center justify-between flex-row">
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-lg text-white"
                    >
                        {weatherData.location.name},{" "}
                        {weatherData.location.region.length > 12
                            ? `${weatherData.location.region.slice(0, 12)}...`
                            : weatherData.location.region}
                    </Text>
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-lg text-white"
                    >
                        {weatherData.current.condition.text}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default WeatherCard;
