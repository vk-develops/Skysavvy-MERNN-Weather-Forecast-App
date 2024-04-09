import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const WindInfo = ({ wind, degree, direction }) => {
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
                    Wind
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {wind}kh
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Direction
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {direction}
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Degree
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {degree}&deg;
                </Text>
            </View>
        </View>
    );
};

const AtmosphericInfo = ({ pressure, percipitaion, humidity }) => {
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
                    Pressure
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {pressure}mb
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Percipitation
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {percipitaion}mm
                </Text>
            </View>
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
                    {humidity}
                </Text>
            </View>
        </View>
    );
};

const VisibilityInfo = ({ visibility, gust, uv }) => {
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
                    Visibility
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {visibility}km
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Gust
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {gust}kph
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Ultra Violet
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {uv}
                </Text>
            </View>
        </View>
    );
};

const AirQualityInfo = ({ co, no, o }) => {
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
                    Carbon Monoxide
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {co}
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Nitrogen Dioxide
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {no}
                </Text>
            </View>
            <View>
                <Text
                    style={{ fontFamily: "plexRegular" }}
                    className="text-[15px] text-slate-300 text-center"
                >
                    Ozone
                </Text>
                <Text
                    style={{ fontFamily: "plexMedium" }}
                    className="text-[24px] text-white text-center"
                >
                    {o}
                </Text>
            </View>
        </View>
    );
};

const WindDetailsScreen = ({ route }) => {
    const { locName } = route.params;

    const [weatherDetail, setWeatherDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllDetails = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${locName}&aqi=yes`
            );
            if (response.ok) {
                const data = await response.json();

                setWeatherDetail(data);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllDetails();
    }, []);

    return (
        <ScrollView className="flex-1">
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <LinearGradient
                    contentContainerStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    className="min-h-screen"
                    colors={["#23227B", "#000236"]}
                >
                    <View className="m-5">
                        <View>
                            <Text
                                style={{ fontFamily: "plexMedium" }}
                                className="text-white text-[22px]"
                            >
                                Wind Details
                            </Text>
                            <WindInfo
                                wind={weatherDetail.current.wind_kph}
                                degree={weatherDetail.current.wind_degree}
                                direction={weatherDetail.current.wind_dir}
                            />
                        </View>
                        <View className="mt-6">
                            <Text
                                style={{ fontFamily: "plexMedium" }}
                                className="text-white text-[22px]"
                            >
                                Atmospheric Measurements
                            </Text>
                            <AtmosphericInfo
                                pressure={weatherDetail.current.pressure_mb}
                                percipitaion={weatherDetail.current.precip_mm}
                                humidity={weatherDetail.current.humidity}
                            />
                        </View>
                        <View className="mt-6">
                            <Text
                                style={{ fontFamily: "plexMedium" }}
                                className="text-white text-[22px]"
                            >
                                Visibility Measurements
                            </Text>
                            <VisibilityInfo
                                visibility={weatherDetail.current.vis_km}
                                gust={weatherDetail.current.gust_kph}
                                uv={weatherDetail.current.uv}
                            />
                        </View>
                        <View className="mt-6">
                            <Text
                                style={{ fontFamily: "plexMedium" }}
                                className="text-white text-[22px]"
                            >
                                Air Quality
                            </Text>
                            <AirQualityInfo
                                co={weatherDetail.current.air_quality.co}
                                no={weatherDetail.current.air_quality.no2}
                                o={weatherDetail.current.air_quality.o3}
                            />
                        </View>
                    </View>
                </LinearGradient>
            )}
        </ScrollView>
    );
};

export default WindDetailsScreen;
