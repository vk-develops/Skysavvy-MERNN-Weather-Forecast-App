import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { weatherImg } from "../../Data/weatherImg";

const SunDetails = ({ sunRise, sunSet }) => {
    return (
        <View
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            className="flex items-center justify-between flex-row p-6 rounded-lg mt-[14px]"
        >
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Sun Rise
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {sunRise}
                </Text>
            </View>
            <View className="px-2">
                <Image
                    className="w-12 h-12"
                    source={weatherImg["SunnyDay"]}
                />
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Sun Set
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {sunSet}
                </Text>
            </View>
        </View>
    );
};

const MoonDetails = ({ moonRise, moonSet }) => {
    return (
        <View
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            className="p-6 rounded-lg mt-[14px]"
        >
            <View className="flex items-center justify-between flex-row">
                <View>
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-[15px] text-slate-300 text-center"
                    >
                        Moon Rise
                    </Text>
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-[24px] text-white text-center"
                    >
                        {moonRise}
                    </Text>
                </View>
                <View className="px-2">
                    <Image
                        className="w-12 h-12"
                        source={weatherImg["ClearNight"]}
                    />
                </View>
                <View>
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-[15px] text-slate-300 text-center"
                    >
                        Moon Set
                    </Text>
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-[24px] text-white text-center"
                    >
                        {moonSet}
                    </Text>
                </View>
            </View>
        </View>
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
                            <SunDetails
                                sunRise={astroData.astronomy.astro.sunrise}
                                sunSet={astroData.astronomy.astro.sunset}
                            />
                            <Text
                                style={{ fontFamily: "plexSemiBold" }}
                                className="text-white text-[22px] pt-8"
                            >
                                Moon Details
                            </Text>
                            <MoonDetails
                                moonRise={astroData.astronomy.astro.moonrise}
                                moonSet={astroData.astronomy.astro.moonset}
                            />
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
