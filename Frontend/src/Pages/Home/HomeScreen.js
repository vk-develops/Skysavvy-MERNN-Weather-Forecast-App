import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import WeatherCard from "../../Components/WeatherCard";
import Header from "../../Components/Header";
import MiniWeatherCard from "../../Components/MiniWeatherCard";

const HomeScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState("Mumbai");
    const [weatherData, setWeatherData] = useState([]);

    const getLocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            console.log("Location permission not granted");
        } else {
            try {
                const currentLocation = await Location.getCurrentPositionAsync(
                    {}
                );
                setLocation(currentLocation);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        }
    };

    const reverseGeo = async () => {
        if (location) {
            try {
                const { coords } = location;
                const reverseGeoCodeAddress =
                    await Location.reverseGeocodeAsync({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });
                if (reverseGeoCodeAddress && reverseGeoCodeAddress.length > 0) {
                    setAddress(reverseGeoCodeAddress);
                    setCity(reverseGeoCodeAddress[0].city);
                } else {
                    console.error("Reverse geocode response is null or empty");
                }
            } catch (error) {
                console.error("Error reverse geocoding:", error);
            }
        }
    };

    const getWeatherData = async () => {
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_WEATHER_API_CURRENT}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${city}`
            );
            const data = response.json();
            setWeatherData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getLocationPermission();
    }, []);

    useEffect(() => {
        reverseGeo();
    }, [location]);

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
                {console.log("DAta")}
                {console.log(weatherData)}
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
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
