import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../Pages/Home/HomeStack";
import ProfileStack from "../Pages/Profile/ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
