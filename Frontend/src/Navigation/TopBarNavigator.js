import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WeatherDetailScreen from "../Pages/Home/WeatherDetailScreen";
import ProfileScreen from "../Pages/Profile/ProfileScreen";

const TopTab = createMaterialTopTabNavigator();

const TopBarNavigator = ({ route }) => {
    const { weatherData } = route.params;

    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="WeatherDetailOverview"
                component={WeatherDetailScreen}
                initialParams={{ weatherData: weatherData }}
            />
            <TopTab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </TopTab.Navigator>
    );
};

export default TopBarNavigator;
