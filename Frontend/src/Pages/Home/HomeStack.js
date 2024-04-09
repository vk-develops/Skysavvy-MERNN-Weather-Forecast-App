import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import TopBarNavigator from "../../Navigation/TopBarNavigator";
import { TouchableOpacity } from "react-native";
import SearchScreen from "./SearchScreen";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
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
                    headerTitle: "SkySavvy",
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
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                options={({ route }) => ({
                    headerStyle: {
                        backgroundColor: "rgba(35, 34, 123, 0.7)",
                    },
                    headerTitle: route.params.locName,
                    headerTitleStyle: {
                        fontFamily: "plexMedium",
                        fontSize: 18,
                        color: "#fff",
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.goBack()}
                            className="ml-[10px]"
                        >
                            <Ionicons
                                name="chevron-back"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    ),
                })}
                name="WeatherDetailScreen"
                component={TopBarNavigator}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(35, 34, 123, 0.7)",
                    },
                    headerTitleStyle: {
                        fontFamily: "plexMedium",
                        fontSize: 18,
                        color: "#fff",
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => navigation.goBack()}
                            className="ml-[10px]"
                        >
                            <Ionicons
                                name="chevron-back"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    ),
                }}
                name="SearchScreen"
                component={SearchScreen}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
