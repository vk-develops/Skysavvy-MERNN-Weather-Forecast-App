import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const Header = ({ onPress }) => {
    return (
        <View
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
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
        </View>
    );
};

export default Header;
