import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import TopBarNavigator from "../../Navigation/TopBarNavigator";
import { TouchableOpacity } from "react-native";

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
                    headerShown: false,
                }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                options={({ route }) => ({
                    headerTitle: route.params.locName,
                    headerTitleStyle: {
                        fontFamily: "plexMedium",
                        fontSize: 18,
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="ml-[10px]"
                        >
                            <Ionicons
                                name="chevron-back"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    ),
                })}
                name="WeatherDetailScreen"
                component={TopBarNavigator}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
