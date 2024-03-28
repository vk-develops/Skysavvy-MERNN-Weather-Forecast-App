import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingStack from "../Pages/Onboarding/OnboardingStack";
import { AUTH_URL, BASE_URL } from "../Redux/constants";
import { setCredentials } from "../Redux/Features/usersAuthSlice";

const MainNavigator = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const checkIsLoggedIn = async () => {
        try {
            const response = await fetch(`${BASE_URL}${AUTH_URL}/isloggedin`, {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                const userInfo = data.userInfo;
                dispatch(setCredentials(userInfo));
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        checkIsLoggedIn();
    });

    return isAuthenticated ? <DrawerNavigator /> : <OnboardingStack />;
};

export default MainNavigator;
