import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Img from "../../assets/Images/MorningMistImg.png";

const MiniWeatherCard = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="px-5 pb-5 rounded-lg relative"
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
                            className="text-base text-white"
                        >
                            Morning Mist
                        </Text>
                        <View className="flex items-center justify-start flex-row gap-2">
                            <Text
                                style={{ fontFamily: "plexRegular" }}
                                className="text-xs text-white"
                            >
                                H:12
                            </Text>
                            <Text
                                style={{ fontFamily: "plexRegular" }}
                                className="text-xs text-white"
                            >
                                H:14
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{ fontFamily: "plexBold" }}
                    className="text-[56px] text-white -mt-3"
                >
                    19&deg;
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MiniWeatherCard;
