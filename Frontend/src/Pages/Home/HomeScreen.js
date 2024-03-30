import { Button, ScrollView, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useLogoutMutation } from "../../Redux/Services/usersAuthApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeCredentials } from "../../Redux/Features/usersAuthSlice";
import WeatherCard from "../../Components/WeatherCard";
import Header from "../../Components/Header";
import MiniWeatherCard from "../../Components/MiniWeatherCard";

const HomeScreen = ({ navigation }) => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    console.log(user);
    console.log(isAuthenticated);

    const dispatch = useDispatch();

    const [logout] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            const response = await logout().unwrap();
            console.log(response);
            dispatch(removeCredentials());
        } catch (err) {
            console.log(err.message);
        }
    };

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
