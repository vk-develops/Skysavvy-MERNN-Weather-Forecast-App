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
                console.log(currentLocation);
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
                setAddress(reverseGeoCodeAddress);
                console.log(reverseGeoCodeAddress);
            } catch (error) {
                console.error("Error reverse geocoding:", error);
            }
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
                <Header
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                />
                <View className="px-5 mt-8">
                    <WeatherCard />
                    <View className="mt-5">
                        <MiniWeatherCard />
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
