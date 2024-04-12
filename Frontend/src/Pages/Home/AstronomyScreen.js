import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const SunDetails = () => {
    return (
        <View
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            className="px-5 pb-5 rounded-lg relative mt-5"
        ></View>
    );
};

const AstronomyScreen = ({ route }) => {
    const { weatherData, locName } = route.params;

    const date = weatherData.location.localtime.split(" ")[0];

    const [astroData, setAstroData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAstronomyDetails = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_ASTRONOMY}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${locName}&dt=${date}`
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                setAstroData(data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAstronomyDetails();
    }, []);

    return (
        <ScrollView>
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <View>
                    {astroData ? (
                        <View className="m-5">
                            <Text
                                style={{ fontFamily: "plexSemiBold" }}
                                className="text-white text-[22px]"
                            >
                                Sun Details
                            </Text>
                        </View>
                    ) : (
                        <ActivityIndicator />
                    )}
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default AstronomyScreen;
