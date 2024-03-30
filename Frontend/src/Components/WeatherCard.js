import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Img from "../../assets/Images/MorningMistImg.png";

const WeatherCard = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="px-5 pb-5 rounded-lg relative"
        >
            <Text
                style={{ fontFamily: "plexBold" }}
                className="text-[75px] text-white mt-2"
            >
                19&deg;
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
                        H:12
                    </Text>
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-sm text-white"
                    >
                        H:14
                    </Text>
                </View>
                <View className="flex items-center justify-between flex-row">
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-lg text-white"
                    >
                        Montreal, Canada
                    </Text>
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-lg text-white"
                    >
                        Morning Mist
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default WeatherCard;
