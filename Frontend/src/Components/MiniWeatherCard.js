import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Img from "../../assets/Images/WeatherImages/WeatherFewClouds-Night.png";

const MiniWeatherCard = ({ weatherData, navigation }) => {
    const handleNavigation = () => {
        navigation.navigate("HomeTab", {
            screen: "WeatherDetailScreen",
            params: {
                weatherData: weatherData,
                locName: weatherData.location.name,
            },
        });
    };

    return (
        <TouchableOpacity
            onPress={handleNavigation}
            activeOpacity={0.6}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="px-5 pb-5 rounded-lg relative mt-5"
        >
            <View className="pb-[6px] pt-[12px] flex items-center justify-start flex-row gap-[5px]">
                <Ionicons
                    name="location-outline"
                    size={22}
                    color="rgb(253, 224, 71)"
                />
                <Text
                    className="text-slate-300 text-base"
                    style={{ fontFamily: "plexMedium" }}
                >
                    {weatherData.location.name}
                </Text>
            </View>
            <View className="py-2 -mb-3 flex items-center justify-between flex-row">
                <View className="flex items-center justify-center gap-4 flex-row">
                    <Image
                        className="w-12 h-[50px]"
                        source={Img}
                    />
                    <View>
                        <Text
                            style={{ fontFamily: "plexMedium" }}
                            className="text-[17px] text-white"
                        >
                            {weatherData.current.condition.text}
                        </Text>
                        <View className="flex items-center justify-start flex-row gap-2 pt-1">
                            <Text
                                style={{ fontFamily: "plexRegular" }}
                                className="text-[12px] text-slate-300"
                            >
                                H:{weatherData.current.humidity}
                            </Text>
                            <Text
                                style={{ fontFamily: "plexRegular" }}
                                className="text-[12px] text-slate-300"
                            >
                                UV:{weatherData.current.uv}
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[45px] text-white -mt-3"
                >
                    {weatherData.current.temp_c}&deg;
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MiniWeatherCard;
