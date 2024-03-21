import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import OnboardingImg from "../../../assets/Images/OnboardingImg.png";

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
            >
                <View className="px-4">
                    <Image
                        source={OnboardingImg}
                        className="mt-4 w-full"
                    />
                    <View>
                        <Text
                            className="text-[30px] text-white capitalize text-center"
                            style={{ fontFamily: "jakartaSemiBold" }}
                        >
                            {" "}
                            weather insights with SkySavvy's accuracy.
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default OnboardingScreen;
