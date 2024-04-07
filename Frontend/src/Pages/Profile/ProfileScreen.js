import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
    return (
        <ScrollView className="flex-1">
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <View className="mt-12">
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="bg-yellow-400 w-2/3 m-auto rounded-2xl"
                    >
                        <Text
                            className="text-[20px] text-black text-center py-3"
                            style={{ fontFamily: "plexMedium" }}
                        >
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default ProfileScreen;
