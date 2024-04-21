import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Loader = () => {
    return (
        <View className="flex-1">
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator />
                </View>
            </LinearGradient>
        </View>
    );
};

export default Loader;
