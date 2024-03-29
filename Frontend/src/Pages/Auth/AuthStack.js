import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import AccountVerificationScreen from "./AccountVerificationScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
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
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="AccountVerificationScreen"
                component={AccountVerificationScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
