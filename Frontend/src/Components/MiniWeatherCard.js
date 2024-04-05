import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Img from "../../assets/Images/MorningMistImg.png";

const MiniWeatherCard = ({ weatherData, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="px-5 pb-5 rounded-lg relative mt-5"
        >
            <View className="py-2 -mb-5 flex items-center justify-between flex-row">
                <View className="flex items-center justify-center gap-2 flex-row">
                    <Image
                        className="w-16 h-[40px]"
                        source={Img}
                    />
                    <View>
                        <Text
                            style={{ fontFamily: "plexMedium" }}
                            className="text-[19px] text-white"
                        >
                            {weatherData.current.condition.text}
                        </Text>
                        <View className="flex items-center justify-start flex-row gap-2 pt-1">
                            <Text
                                style={{ fontFamily: "plexRegular" }}
                                className="text-[13px] text-slate-300"
                            >
                                H:{weatherData.current.humidity}
                            </Text>
                            <Text
                                style={{ fontFamily: "plexRegular" }}
                                className="text-[13px] text-slate-300"
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
