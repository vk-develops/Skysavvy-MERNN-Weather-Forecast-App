import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
