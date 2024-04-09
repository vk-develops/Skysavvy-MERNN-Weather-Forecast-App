import { View, Text, Image } from "react-native";
import React from "react";
import Img from "../../assets/Images/WeatherImages/WeatherClearSky-Day.png";

const HourlyForecastCard = () => {
    return (
        <View className="flex items-center justify-center flex-row gap-2 m-1">
            <View
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                className="px-4 py-3 rounded-xl relative"
            >
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-white text-base text-center"
                >
                    12:34pm
                </Text>
                <View className="flex items-center justify-center mt-3">
                    <Image
                        className="w-[50px] h-[50px]"
                        source={Img}
                    />
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-slate-200 text-xs pt-1"
                    >
                        Clear Sky
                    </Text>
                </View>
                <Text
                    style={{ fontFamily: "plexSemiBold" }}
                    className="text-[22px] text-white text-center pt-2"
                >
                    12.3&deg;
                </Text>
            </View>
        </View>
    );
};

export default HourlyForecastCard;
