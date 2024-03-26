import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/Navigation/DrawerNavigator";
import store from "./src/Redux/store";

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
            <Provider store={store}>
                <StatusBar
                    backgroundColor="#23227B"
                    style="light"
                />
                <NavigationContainer>
                    <DrawerNavigator />
                </NavigationContainer>
            </Provider>
        </SafeAreaView>
    );
}
