import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WeatherDetailScreen from "../Pages/Home/WeatherDetailScreen";
import ProfileScreen from "../Pages/Profile/ProfileScreen";
import WindDetailsScreen from "../Pages/Home/WindDetailsScreen";

const TopTab = createMaterialTopTabNavigator();

const TopBarNavigator = ({ route }) => {
    const { weatherData, locName } = route.params;

    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: "plexMedium",
                    fontSize: 14,
                    textTransform: "capitalize",
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#facc15",
                    height: 4,
                    borderRadius: 20,
                },
                tabBarActiveTintColor: "#854e0d",
                tabBarInactiveTintColor: "#ccc",
            }}
        >
            <TopTab.Screen
                options={{
                    tabBarLabel: "Overview",
                }}
                name="WeatherDetailOverview"
                component={WeatherDetailScreen}
                initialParams={{ weatherData: weatherData, locName: locName }}
            />
            <TopTab.Screen
                options={{
                    tabBarLabel: "Measurements",
                }}
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
