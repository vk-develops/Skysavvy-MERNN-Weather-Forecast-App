import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { OtpInput } from "react-native-otp-entry";
import { styles } from "../../Styles/style";
import { useErrorToast, useSuccessToast } from "../../Hooks/useToast";
import { useVerifyAccountMutation } from "../../Redux/Services/userAccountApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/Features/usersAuthSlice";
import AuthenticateLoader from "../../Components/AuthenticateLoader";

const AccountVerificationScreen = () => {
    const [otp, setOtp] = useState("");

    const [verifyAccount, { isLoading }] = useVerifyAccountMutation();

    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await verifyAccount({ otp }).unwrap();
            if (response.success) {
                const userInfo = response.userInfo;
                dispatch(setCredentials(userInfo));
                useSuccessToast({ msg: response.message });
            }
        } catch (err) {
            useErrorToast({ msg: err.data.message });
        }
    };

    if (isLoading) {
        return <AuthenticateLoader title={"Verifying OTP..."} />;
    }

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
                    source={{
                        uri: "https://vk-develops-static-assets.vercel.app/Public/Images/Login-Bg.png",
                    }}
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
                                    onFilled={(text) => setOtp(text)}
                                />
                            </View>
                            <View className="flex items-center justify-end gap-[1px] flex-row mt-5">
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

                            <View className="mt-16">
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
                                            ? `Verifying OTP...`
                                            : `Verify OTP`}
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
