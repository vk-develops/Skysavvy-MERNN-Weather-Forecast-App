import { ScrollView, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import WeatherCard from "../../Components/WeatherCard";
import Header from "../../Components/Header";
import MiniWeatherCard from "../../Components/MiniWeatherCard";

const HomeScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

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

    const reverseGeo = async () => {
        if (location) {
            const { coords } = location;
            const reverseGeoCodeAddress = await Location.reverseGeocodeAsync({
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

    const getWeatherData = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${city}`
            );
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocationPermission();
    }, []);

    useEffect(() => {
        reverseGeo();
    }, [location]);

    useEffect(() => {
        getWeatherData();
    }, [city]);

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
                <Header
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                />
                <View className="px-5 mt-8">
                    {weatherData && (
                        <View>
                            <WeatherCard
                                onPress={() =>
                                    navigation.navigate("HomeTab", {
                                        screen: "WeatherDetailScreen",
                                    })
                                }
                                weatherData={weatherData}
                            />
                            <View className="mt-5">
                                <MiniWeatherCard />
                            </View>
                        </View>
                    )}
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
