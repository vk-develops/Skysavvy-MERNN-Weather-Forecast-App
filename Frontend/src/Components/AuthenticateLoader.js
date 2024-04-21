import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AuthenticateLoader = ({ title }) => {
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
                    <ActivityIndicator
                        size={80}
                        color={"#facc15"}
                    />
                    <Text
                        className="text-white text-2xl text-center pt-6"
                        style={{ fontFamily: "plexSemiBold" }}
                    >
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
};

export default AuthenticateLoader;
