import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import TopBarNavigator from "../../Navigation/TopBarNavigator";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    // gestureEnabled: true,
                    // gestureDirection: "horizontal",
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }
            }
        >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="WeatherDetailScreen"
                component={TopBarNavigator}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
