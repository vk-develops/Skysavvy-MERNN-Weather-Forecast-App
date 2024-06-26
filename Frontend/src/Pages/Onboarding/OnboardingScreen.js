import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { styles } from "../../Styles/style";

const OnboardingScreen = ({ navigation }) => {
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
                <View className="px-4 flex items-center justify-center">
                    <Image
                        style={{
                            width: "100%",
                            height: Dimensions.get("window").width - 70,
                        }}
                        source={{
                            uri: "https://vk-develops-static-assets.vercel.app/Public/Images/OnboardingImg.png",
                        }}
                        className={`w-full`}
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
                            className={`${styles.paraText} pt-[22px]`}
                            style={{ fontFamily: "plexRegular" }}
                        >
                            Install Bootstrap’s source Sass and JavaScript files
                            via npm or Meteor. Package managed installs don’t
                            full build scripts.
                        </Text>
                    </View>
                    <View className="mt-12 mb-8">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("AuthStack")}
                            activeOpacity={0.7}
                            className="bg-yellow-400 w-2/3 m-auto rounded-2xl"
                        >
                            <Text
                                className="text-[20px] text-black text-center py-3 px-12"
                                style={{ fontFamily: "plexMedium" }}
                            >
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default OnboardingScreen;
