import { View, Text, ScrollView, ImageBackground } from "react-native";
import React from "react";
import LoginBg from "../../../assets/Images/Login-Bg.png";
import { LinearGradient } from "expo-linear-gradient";

const RegisterScreen = () => {
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
                <ImageBackground
                    imageStyle={{ opacity: 0.4 }}
                    source={LoginBg}
                    resizeMode="cover"
                    className="flex-1 -m-12 justify-center"
                ></ImageBackground>
            </LinearGradient>
        </ScrollView>
    );
};

export default RegisterScreen;
