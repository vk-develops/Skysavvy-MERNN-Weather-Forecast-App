import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import WeatherCard from "../../Components/WeatherCard";
import useGetWeatherData from "../../Hooks/useGetWeatherData";
import MultipleWeatherDataComponent from "../../Components/MultipleWeatherDataComponent";

const HomeScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                console.log("Location not granted");
                setCity("Mumbai");
            } else {
                let getlocation = await Location.getCurrentPositionAsync({});
                setLocation(getlocation);
            }
        };

        getLocationPermission();
    }, []);

    useEffect(() => {
        const reverseGeo = async () => {
            if (location) {
                const { coords } = location;
                const reverseGeoCodeAddress =
                    await Location.reverseGeocodeAsync({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });
                setAddress(reverseGeoCodeAddress);

                if (reverseGeoCodeAddress) {
                    setCity(reverseGeoCodeAddress[0].city);
                }
            } else {
                console.log("Location is null or undefined");
            }
        };

        reverseGeo();
    }, [location]);

    const mainURL = `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${city}`;
    const { data: weatherDataFromHook, isLoading } = useGetWeatherData(mainURL);

    useEffect(() => {
        if (weatherDataFromHook) {
            setWeatherData(weatherDataFromHook);
        }
    }, [weatherDataFromHook]);

    return (
        <ScrollView className="flex-1">
            <StatusBar
                backgroundColor="rgba(35, 34, 123, 0.7)"
                style="light"
            />
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <View className="px-5 mt-8">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SearchScreen")}
                        activeOpacity={0.6}
                        className="p-[14px] rounded-full mb-4"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    >
                        <View className="flex items-center justify-start flex-row gap-2 pl-1">
                            <Feather
                                name="search"
                                size={24}
                                color="white"
                            />
                            <Text
                                style={{ fontFamily: "plexMedium" }}
                                className="text-[#ccc] text-base pl-1"
                            >
                                Search of locations
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {isLoading && <ActivityIndicator />}
                    {weatherData && (
                        <View>
                            <Text
                                style={{ fontFamily: "plexSemiBold" }}
                                className="text-white text-[22px] pt-2 pb-4"
                            >
                                Today's Forecast
                            </Text>
                            <WeatherCard
                                onPress={() =>
                                    navigation.navigate("HomeTab", {
                                        screen: "WeatherDetailScreen",
                                        params: {
                                            weatherData: weatherData,
                                            locName: weatherData.location.name,
                                        },
                                    })
                                }
                                weatherData={weatherData}
                            />
                            <View className="mt-5 mb-12">
                                <Text
                                    style={{ fontFamily: "plexSemiBold" }}
                                    className="text-white text-[22px] pt-4"
                                >
                                    Popular Locations
                                </Text>

                                <MultipleWeatherDataComponent
                                    navigation={navigation}
                                />
                            </View>
                        </View>
                    )}
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
