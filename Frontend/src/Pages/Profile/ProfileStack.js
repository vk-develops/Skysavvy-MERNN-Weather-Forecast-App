import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;
