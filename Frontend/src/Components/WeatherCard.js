import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Img from "../../assets/Images/MorningMistImg.png";

const WeatherCard = ({ onPress, weatherData }) => {
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
            <View className="absolute top-5 right-0">
                <Image
                    source={Img}
                    className="h-[135px] w-[180px]"
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
                        H:{weatherData.current.humidity}
                    </Text>
                </View>
                <View className="flex items-center justify-between flex-row">
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-lg text-white"
                    >
                        {weatherData.location.name},{" "}
                        {weatherData.location.region}
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
