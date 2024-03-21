import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingStack from "./src/Pages/Onboarding/OnboardingStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const [fontsLoaded] = useFonts({
        jakartaRegular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
        jakartaMedium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
        jakartaSemiBold: require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
        jakartaBold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
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
                <OnboardingStack />
            </NavigationContainer>
        </SafeAreaView>
    );
}
