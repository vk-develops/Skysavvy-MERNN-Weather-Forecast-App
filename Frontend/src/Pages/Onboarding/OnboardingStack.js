import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./OnboardingScreen";
import AuthStack from "../Auth/AuthStack";

const Stack = createStackNavigator();

const OnboardingStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
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
