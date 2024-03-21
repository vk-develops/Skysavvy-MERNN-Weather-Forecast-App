import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

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
