import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor="#23227B"
                style="light"
            />
        </SafeAreaView>
    );
}
