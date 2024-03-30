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
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState([]);

    const getLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            console.log("Location not granted");
            setCity("Mumbai");
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
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

            if (reverseGeoCodeAddress && reverseGeoCodeAddress.length > 0) {
                setCity(reverseGeoCodeAddress[0].city);
            }
        } else {
            console.log("Location is null or undefined");
        }
    };

    const getWeatherData = async () => {
        const getCity = city ? city : "Mumbai";

        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${getCity}&aqi=true`
            );
            const data = response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
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

    // Remove console.log statements from production code
    console.log(weatherData);

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
                    <WeatherCard weatherData={weatherData} />
                    <View className="mt-5">
                        <MiniWeatherCard />
                    </View>
                    {weatherData && <Text>{weatherData.current}</Text>}
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
