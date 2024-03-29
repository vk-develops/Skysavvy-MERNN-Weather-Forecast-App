import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { OtpInput } from "react-native-otp-entry";
import LoginBg from "../../../assets/Images/Login-Bg.png";

const AccountVerificationScreen = () => {
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
                <ImageBackground
                    imageStyle={{ opacity: 0.4 }}
                    source={LoginBg}
                    resizeMode="cover"
                    className="flex-1 -m-12 justify-center"
                >
                    <OtpInput
                        numberOfDigits={6}
                        onTextChange={(text) => console.log(text)}
                    />
                </ImageBackground>
            </LinearGradient>
        </ScrollView>
    );
};

export default AccountVerificationScreen;
