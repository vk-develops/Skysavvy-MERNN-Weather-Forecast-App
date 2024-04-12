import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(35, 34, 123, 0.7)",
                    },
                    headerTitleStyle: {
                        fontFamily: "plexMedium",
                        fontSize: 20,
                        color: "#fff",
                    },
                    headerTitle: "Profile",
                    headerRight: () => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.openDrawer()}
                            className="mr-[15px]"
                        >
                            <FontAwesome6
                                name="bars-staggered"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;
