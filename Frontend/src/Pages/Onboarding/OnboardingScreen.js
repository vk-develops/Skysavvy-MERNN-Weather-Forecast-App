import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const OnboardingScreen = () => {
    return (
        <ScrollView>
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="flex flex-1 h-screen"
                colors={["#23227B", "#000236"]}
            ></LinearGradient>
        </ScrollView>
    );
};

export default OnboardingScreen;
