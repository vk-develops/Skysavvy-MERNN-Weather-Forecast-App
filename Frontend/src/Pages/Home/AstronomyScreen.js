import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

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
                    source={{
                        uri: "https://vk-develops-static-assets.vercel.app/Public/Images/WeatherImages/WeatherClearSky-Day.png",
                    }}
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

const MoonDetails = ({ moonRise, moonSet, moonPhase }) => {
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
                        source={{
                            uri: "https://vk-develops-static-assets.vercel.app/Public/Images/WeatherImages/WeatherClearSky-Night.png",
                        }}
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
            <Text
                style={{ fontFamily: "plexMedium" }}
                className="pt-4 text-center text-neutral-200 text-lg"
            >
                Moon Phase: {moonPhase}
            </Text>
        </View>
    );
};

const AstronomyScreen = ({ route }) => {
    const { locName } = route.params;

    const dd = new Date();
    const year = dd.getFullYear();
    const month = dd.getMonth();
    const date = dd.getDate();
    const fullDate = `${year}-${month}-${date}`;

    const [astroData, setAstroData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAstronomyDetails = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_ASTRONOMY}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${locName}&dt=${fullDate}`
            );

            if (response.ok) {
                const data = await response.json();
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
                                moonPhase={astroData.astronomy.astro.moon_phase}
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
