import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import WeatherLogo from "../../../assets/Images/MorningMistImg.png";
import WeatherInfo from "../../Components/WeatherInfo";

const WeatherDetailScreen = ({ route, navigation }) => {
    const { weatherData, locName } = route.params;

    console.log(weatherData, locName);

    const location = weatherData.location;
    const current = weatherData.current;

    return (
        <ScrollView className="flex-1">
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <View className="px-5 my-8">
                    <View className="pt-4">
                        <Text
                            className="text-2xl text-white text-center"
                            style={{ fontFamily: "plexSemiBold" }}
                        >
                            {location.name}, {location.region}
                        </Text>
                        <Text
                            style={{ fontFamily: "plexMedium" }}
                            className="text-[15px] text-slate-300 text-center pt-2"
                        >
                            Today, 15 Dec
                        </Text>
                    </View>
                    <View className="flex items-center justify-center mt-10">
                        <Image
                            className="h-[220px] w-[300px]"
                            source={WeatherLogo}
                        />
                    </View>
                    <View className="pt-4">
                        <Text
                            style={{ fontFamily: "plexSemiBold" }}
                            className="text-[22px] text-white text-center"
                        >
                            {current.condition.text}
                        </Text>
                    </View>
                    <View>
                        <WeatherInfo
                            wind={current.wind_kph}
                            temp={current.temp_c}
                            humid={current.humidity}
                        />
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default WeatherDetailScreen;