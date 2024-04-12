import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
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
                    backgroundColor: "#fff",
                },
                drawerLabelStyle: {
                    fontFamily: "plexMedium",
                    fontSize: 16,
                    marginLeft: -8,
                },
                drawerActiveTintColor: "#23227B",
                drawerInactiveTintColor: "#aaa",
            }}
        >
            <Drawer.Screen
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialIcons
                            name="home-filled"
                            size={24}
                            color={color}
                        />
                    ),
                    drawerLabel: "Home",
                }}
                name="HomeDrawer"
                component={TabNavigator}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: ({ color }) => (
                        <FontAwesome
                            style={{ paddingLeft: 4 }}
                            name="user"
                            size={24}
                            color={color}
                        />
                    ),
                    drawerLabel: "Profile",
                }}
                name="ProfileDrawer"
                component={ProfileStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
