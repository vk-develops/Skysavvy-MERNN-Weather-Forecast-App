import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { OtpInput } from "react-native-otp-entry";
import LoginBg from "../../../assets/Images/Login-Bg.png";
import { styles } from "../../Styles/style";

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
                    className="flex-1 -m-12 "
                >
                    <View className="m-12 pt-28 px-4">
                        <View>
                            <Text
                                className="text-[30px] text-white text-center pt-6"
                                style={{ fontFamily: "plexSemiBold" }}
                            >
                                Verify Account
                            </Text>
                            <Text
                                className={`${styles.paraText} pt-[22px]`}
                                style={{ fontFamily: "plexRegular" }}
                            >
                                Install Bootstrap’s source Sass and JavaScript
                                files via npm or Meteor. Package managed
                                installs don’t full build scripts.
                            </Text>
                            <View className="mt-16">
                                <OtpInput
                                    numberOfDigits={6}
                                    style={{ width: "100%", height: 50 }}
                                    focusColor="#FACC15"
                                    focusStickBlinkingDuration={500}
                                    theme={{
                                        pinCodeTextStyle: { color: "white" },
                                    }}
                                    onTextChange={(text) => console.log(text)}
                                    onFilled={(text) =>
                                        console.log(`OTP is ${text}`)
                                    }
                                />
                            </View>
                            <View className="flex items-center justify-end gap-[1px] flex-row mt-8">
                                <Text
                                    className="text-slate-300 text-base"
                                    style={{ fontFamily: "plexRegular" }}
                                >
                                    Did'nt recieve OTP ?{" "}
                                </Text>

                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("RegisterScreen")
                                    }
                                    activeOpacity={0.7}
                                >
                                    <Text
                                        className=" text-yellow-400 text-base"
                                        style={{
                                            fontFamily: "plexMedium",
                                        }}
                                    >
                                        Resend OTP
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </ScrollView>
    );
};

export default AccountVerificationScreen;
