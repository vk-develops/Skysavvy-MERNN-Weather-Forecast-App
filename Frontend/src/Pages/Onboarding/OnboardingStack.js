import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import OnboardingScreen from "./OnboardingScreen";
import AuthStack from "../Auth/AuthStack";
import HomeScreen from "../Home/HomeScreen";

const Stack = createStackNavigator();

const OnboardingStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
            />
            <Stack.Screen
                name="AuthStack"
                component={AuthStack}
            />
        </Stack.Navigator>
    );
};

export default OnboardingStack;
