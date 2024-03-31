import { View, Text } from "react-native";
import React from "react";

const WeatherInfo = () => {
    return (
        <View
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            className="flex items-center justify-between flex-row p-6 rounded-lg mt-4"
        >
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Wind
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    245
                </Text>
            </View>

            <View
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="h-16 w-[2px]"
            ></View>

            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Temperature
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    24&deg;
                </Text>
            </View>

            <View
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="h-16 w-[2px]"
            ></View>

            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Humidity
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    24%
                </Text>
            </View>
        </View>
    );
};

export default WeatherInfo;
