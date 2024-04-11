import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import useLogout from "../../Hooks/useLogout";

const width = Dimensions.get("window").width;

const ProfileElement = () => {
    const img = {
        uri: "https://www.translitescaffolding.com/wp-content/uploads/2013/06/user-avatar.png",
    };

    return (
        <View className="relative flex items-center justify-center">
            <View
                style={{
                    backgroundColor: "transparent",
                    borderStyle: "solid",
                    borderRightWidth: width,
                    borderTopWidth: width / 1.2,
                    borderRightColor: "transparent",
                    borderTopColor: "rgba(255, 255, 255, 0.3)",
                }}
                className={`h-0 w-0 bg-transparent`}
            ></View>
            <View
                style={{ width: 140, height: 140, backgroundColor: "#facc15" }}
                className="absolute mt-[185px] flex items-center justify-center rounded-full shadow-lg drop-shadow-lg"
            >
                <Image
                    className="w-36 h-36"
                    source={img}
                />
            </View>
        </View>
    );
};

const ProfileScreen = () => {
    const { logoutHandler } = useLogout();

    const handleLogout = async () => {
        await logoutHandler();
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
                <ProfileElement />
                <View className="mt-12">
                    <TouchableOpacity
                        onPress={handleLogout}
                        activeOpacity={0.7}
                        className="bg-yellow-400 w-2/3 m-auto rounded-2xl"
                    >
                        <Text
                            className="text-[20px] text-black text-center py-3"
                            style={{ fontFamily: "plexMedium" }}
                        >
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default ProfileScreen;
