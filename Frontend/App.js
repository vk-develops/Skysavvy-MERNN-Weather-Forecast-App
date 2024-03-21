import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView>
            <View>
                <Text className="text-3xl pt-10 text-blue-400">
                    Open up App.js to start working on your app!
                </Text>
                <StatusBar
                    backgroundColor="#23227B"
                    style="light"
                />
            </View>
        </SafeAreaView>
    );
}
