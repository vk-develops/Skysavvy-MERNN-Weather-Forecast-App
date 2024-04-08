import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { FontAwesome6 } from "@expo/vector-icons";

const Header = ({ onPress }) => {
    return (
        <BlurView
            experimentalBlurMethod="dimezisBlurView"
            intensity={60}
            className="z-10"
        >
            <View className="flex items-center justify-between flex-row p-4 ">
                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.8}
                >
                    <FontAwesome6
                        name="bars-staggered"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <Text
                    style={{ fontFamily: "plexSemiBold" }}
                    className="text-xl text-white"
                >
                    SkySavvy
                </Text>
            </View>
        </BlurView>
    );
};

export default Header;
