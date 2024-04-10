import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WeatherDetailScreen from "../Pages/Home/WeatherDetailScreen";
import WindDetailsScreen from "../Pages/Home/WindDetailsScreen";

const TopTab = createMaterialTopTabNavigator();

const TopBarNavigator = ({ route }) => {
    const { weatherData, locName } = route.params;

    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarItemStyle: {
                    backgroundColor: "rgba(35, 34, 123, 0.7)",
                },
                tabBarLabelStyle: {
                    fontFamily: "plexMedium",
                    fontSize: 15,
                    textTransform: "capitalize",
                },
                tabBarIndicatorStyle: {
                    height: 4,
                    borderRadius: 20,
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#bbb",
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
                    tabBarLabel: "Measurement",
                }}
                name="WindDetailsScreen"
                component={WindDetailsScreen}
                initialParams={{ locName: locName }}
            />
        </TopTab.Navigator>
    );
};

export default TopBarNavigator;
