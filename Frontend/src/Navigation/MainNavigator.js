import React from "react";
import { useSelector } from "react-redux";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingStack from "../Pages/Onboarding/OnboardingStack";

const MainNavigator = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated ? <DrawerNavigator /> : <OnboardingStack />;
};

export default MainNavigator;
