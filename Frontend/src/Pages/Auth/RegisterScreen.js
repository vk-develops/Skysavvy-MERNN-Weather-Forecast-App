import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
} from "react-native";
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
                >
                    <View className="m-12 px-4">
                        <View>
                            <Text
                                className="text-[30px] text-white text-center"
                                style={{ fontFamily: "plexSemiBold" }}
                            >
                                Register
                            </Text>
                            <Text
                                className="text-base text-[#888] text-center pt-[22px]"
                                style={{ fontFamily: "plexRegular" }}
                            >
                                Install Bootstrap’s source Sass and JavaScript
                                files via npm or Meteor. Package managed
                                installs don’t full build scripts.
                            </Text>

                            <View className="mt-10">
                                <View>
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Name:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your email"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                    />
                                </View>
                                <View>
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Name:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your email"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                    />
                                </View>
                                <View>
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Name:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your email"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </ScrollView>
    );
};

export default RegisterScreen;
