import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingStack from "./src/Pages/Onboarding/OnboardingStack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/Navigation/TabNavigator";
import HomeStack from "./src/Pages/Home/HomeStack";
import HomeScreen from "./src/Pages/Home/HomeScreen";
import ProfileStack from "./src/Pages/Profile/ProfileStack";
import DrawerNavigator from "./src/Navigation/DrawerNavigator";

export default function App() {
    const [fontsLoaded] = useFonts({
        plexRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
        plexMedium: require("./assets/fonts/IBMPlexSans-Medium.ttf"),
        plexSemiBold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
        plexBold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#23227B"
                style="light"
            />
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}
