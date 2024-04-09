import { View, Text, Image } from "react-native";
import React from "react";
import Img from "../../assets/Images/WeatherImages/WeatherClearSky-Day.png";

const HourlyForecastCard = ({ forecast }) => {
    const time = forecast.time.split(" ")[1];

    return (
        <View className="flex items-center justify-center flex-row gap-2 mr-3">
            <View
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                className="px-4 py-3 rounded-xl relative"
            >
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-white text-base text-center"
                >
                    {time}
                    {time.split(":")[0] < 12 ? `am` : `pm`}
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
                        {forecast.condition.text}
                    </Text>
                </View>
                <Text
                    style={{ fontFamily: "plexSemiBold" }}
                    className="text-[22px] text-white text-center pt-2"
                >
                    {forecast.temp_c}&deg;
                </Text>
            </View>
        </View>
    );
};

export default HourlyForecastCard;
