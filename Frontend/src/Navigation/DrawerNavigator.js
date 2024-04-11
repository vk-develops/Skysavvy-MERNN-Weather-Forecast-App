import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigator from "./TabNavigator";
import ProfileStack from "../Pages/Profile/ProfileStack";
import { Dimensions } from "react-native";
import CustomDrawer from "../Components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: Dimensions.get("window").width / 1.3,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
                drawerLabelStyle: {
                    fontFamily: "plexMedium",
                    fontSize: 15,
                    paddingVertical: 0,
                },
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
