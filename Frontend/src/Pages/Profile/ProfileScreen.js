import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import useLogout from "../../Hooks/useLogout";

const width = Dimensions.get("window").width;

const ProfileElement = ({ name, email }) => {
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
            <View className="-mt-[236px] flex items-center justify-center">
                <View
                    style={{
                        width: 140,
                        height: 140,
                        backgroundColor: "#facc15",
                    }}
                    className="flex items-center justify-center rounded-full shadow-lg drop-shadow-lg"
                >
                    <Image
                        className="w-36 h-36"
                        source={img}
                    />
                </View>
                <View className="mt-5">
                    <Text
                        className="text-white text-center text-[24px]"
                        style={{ fontFamily: "plexSemiBold" }}
                    >
                        {name}
                    </Text>
                    <Text
                        className=" text-neutral-400 text-center text-base pt-2"
                        style={{ fontFamily: "plexMedium" }}
                    >
                        {email}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const ProfileScreen = () => {
    const { user } = useSelector((state) => state.auth);

    const { logoutHandler } = useLogout();

    const handleLogout = async () => {
        await logoutHandler();
    };

    return (
        <View className="flex-1">
            <LinearGradient
                contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="min-h-screen"
                colors={["#23227B", "#000236"]}
            >
                <ProfileElement
                    name={user.name}
                    email={user.email}
                />
                <View className="mt-32">
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
        </View>
    );
};

export default ProfileScreen;
