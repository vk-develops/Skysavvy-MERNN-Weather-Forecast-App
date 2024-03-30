import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigator from "./TabNavigator";
import ProfileStack from "../Pages/Profile/ProfileStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="HomeDrawer"
                component={TabNavigator}
            />
            <Drawer.Screen
                name="ProfileDrawer"
                component={ProfileStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
