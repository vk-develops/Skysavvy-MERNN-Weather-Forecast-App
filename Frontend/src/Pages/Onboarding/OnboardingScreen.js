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
                            className="text-[28px] text-white capitalize text-center"
                            style={{ fontFamily: "plexSemiBold" }}
                        >
                            {" "}
                            weather insights with SkySavvy's accuracy
                        </Text>
                        <Text
                            className="text-base text-slate-500 text-center pt-[22px]"
                            style={{ fontFamily: "plexMedium" }}
                        >
                            Install Bootstrap’s source Sass and JavaScript files
                            via npm or Meteor. Package managed installs don’t
                            full build scripts.
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default OnboardingScreen;
