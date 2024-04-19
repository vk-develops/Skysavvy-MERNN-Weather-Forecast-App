import { View, Text, Image } from "react-native";
import React from "react";
import ReturnHourlyImgString from "./ReturnHourlyImgString";
import { newWeatherImg } from "../Data/newWeatherImg";

const HourlyForecastCard = ({ forecast, time }) => {
    const curtime = forecast.time.split(" ")[1];

    // const date = new Date();
    // const hour = date.getHours();

    const { image } = ReturnHourlyImgString(forecast);

    const uri = newWeatherImg[image]?.uri || `https:${forecast.condition.icon}`;

    return (
        <View className="flex items-center justify-center flex-row gap-2 mr-3">
            <View
                style={{
                    backgroundColor:
                        Number(curtime.split(":")[0]) ===
                        Number(time.split(":")[0])
                            ? "rgba(133, 77, 14, 1)"
                            : "rgba(255, 255, 255, 0.3)",
                }}
                className="px-4 py-3 rounded-xl relative"
            >
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-white text-base text-center"
                >
                    {curtime}
                    {curtime.split(":")[0] < 12 ? `am` : `pm`}
                </Text>
                <View className="flex items-center justify-center mt-3">
                    <Image
                        className="w-[50px] h-[50px]"
                        source={{ uri }}
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
