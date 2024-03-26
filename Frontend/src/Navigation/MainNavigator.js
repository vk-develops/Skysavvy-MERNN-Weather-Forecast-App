import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingStack from "../Pages/Onboarding/OnboardingStack";

const MainNavigator = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated ? <DrawerNavigator /> : <OnboardingStack />;
};

export default MainNavigator;
