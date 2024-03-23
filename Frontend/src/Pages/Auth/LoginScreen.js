import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";
import LoginBg from "../../../assets/Images/Login-Bg.png";
import { LinearGradient } from "expo-linear-gradient";

const RegisterScreen = ({ navigation }) => {
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
                                Login
                            </Text>
                            <Text
                                className="text-base text-[#aaa] text-center pt-[22px]"
                                style={{ fontFamily: "plexRegular" }}
                            >
                                Install Bootstrap’s source Sass and JavaScript
                                files via npm or Meteor. Package managed
                                installs don’t full build scripts.
                            </Text>

                            <View className="mt-10">
                                <View className="mt-6">
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Email:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your email"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                    />
                                </View>
                                <View className="mt-6">
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Password:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your password"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                    />
                                </View>
                            </View>
                            <View className="mt-12">
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    className="bg-yellow-400 w-2/3 m-auto rounded-2xl"
                                >
                                    <Text
                                        className="text-[20px] text-black text-center py-3"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View className="mt-6">
                                <Text
                                    className="text-white text-sm text-center"
                                    style={{ fontFamily: "plexMedium" }}
                                >
                                    -- OR --
                                </Text>
                                <View className="flex items-center justify-center gap-[1px] flex-row mt-3">
                                    <Text
                                        className="text-slate-300 text-lg"
                                        style={{ fontFamily: "plexRegular" }}
                                    >
                                        New user ?{" "}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate(
                                                "RegisterScreen"
                                            )
                                        }
                                        activeOpacity={0.7}
                                    >
                                        <Text
                                            className=" text-yellow-400 text-lg"
                                            style={{
                                                fontFamily: "plexMedium",
                                            }}
                                        >
                                            Sign Up
                                        </Text>
                                    </TouchableOpacity>
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
