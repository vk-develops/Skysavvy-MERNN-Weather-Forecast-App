import { View, Text, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
    return (
        <ScrollView className="flex-1">
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            ></LinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;
