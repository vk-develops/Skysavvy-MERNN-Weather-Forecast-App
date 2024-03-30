import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import LoginBg from "../../../assets/Images/Login-Bg.png";
import { useRegisterMutation } from "../../Redux/Services/usersAuthApiSlice";
import { useErrorToast, useSuccessToast } from "../../Hooks/useToast";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [register, { isLoading }] = useRegisterMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await register({ name, email, password }).unwrap();
            console.log(response);
            if (response.success) {
                useSuccessToast({ msg: response.message });
                navigation.navigate("AccountVerificationScreen");
            }
        } catch (err) {
            console.log(err.data.message);
            useErrorToast({ msg: err.data.message });
        }
    };

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
                    <View className="m-12 px-4">
                        <View>
                            <Text
                                className="text-[30px] text-white text-center"
                                style={{ fontFamily: "plexSemiBold" }}
                            >
                                Register
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
                                <View>
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Name:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] text-white border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your name"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                        value={name}
                                        onChangeText={(text) => setName(text)}
                                    />
                                </View>
                                <View className="mt-6">
                                    <Text
                                        className="text-[17px] text-white"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        Email:{" "}
                                    </Text>
                                    <TextInput
                                        className="border-[1.5px] text-white border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter your email"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="email-address"
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
                                        className="border-[1.5px] text-white border-slate-400 text-base rounded-lg py-2 pl-4 mt-4"
                                        placeholder="Enter a password"
                                        placeholderTextColor={"#aaa"}
                                        style={{ fontFamily: "plexRegular" }}
                                        value={password}
                                        onChangeText={(text) =>
                                            setPassword(text)
                                        }
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                            <View className="mt-12">
                                <TouchableOpacity
                                    onPress={submitHandler}
                                    activeOpacity={0.7}
                                    className="bg-yellow-400 w-2/3 m-auto rounded-2xl"
                                >
                                    <Text
                                        className="text-[20px] text-black text-center py-3"
                                        style={{ fontFamily: "plexMedium" }}
                                    >
                                        {isLoading
                                            ? `Signing Up...`
                                            : `Sign Up`}
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
                                        Already a user{" "}
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate("LoginScreen")
                                        }
                                        activeOpacity={0.7}
                                    >
                                        <Text
                                            className=" text-yellow-400 text-lg"
                                            style={{
                                                fontFamily: "plexMedium",
                                            }}
                                        >
                                            Sign In
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
