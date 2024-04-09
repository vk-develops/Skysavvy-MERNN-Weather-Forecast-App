import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WeatherDetailScreen from "../Pages/Home/WeatherDetailScreen";
import ProfileScreen from "../Pages/Profile/ProfileScreen";
import WindDetailsScreen from "../Pages/Home/WindDetailsScreen";

const TopTab = createMaterialTopTabNavigator();

const TopBarNavigator = ({ route }) => {
    const { weatherData, locName } = route.params;

    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="WeatherDetailOverview"
                component={WeatherDetailScreen}
                initialParams={{ weatherData: weatherData, locName: locName }}
            />
            <TopTab.Screen
                name="WindDetailsScreen"
                component={WindDetailsScreen}
                initialParams={{ locName: locName }}
            />
            <TopTab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </TopTab.Navigator>
    );
};

export default TopBarNavigator;