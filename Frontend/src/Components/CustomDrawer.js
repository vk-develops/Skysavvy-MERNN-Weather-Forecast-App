import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
    DrawerItemList,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

const ProfileComponent = () => {
    const img = {
        uri: "https://www.translitescaffolding.com/wp-content/uploads/2013/06/user-avatar.png",
    };

    return (
        <LinearGradient
            contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
            }}
            className="h-56 relative"
            colors={["#23227B", "#000236"]}
        >
            <TouchableOpacity className="flex items-center justify-start flex-row gap-2 absolute bottom-8 left-2">
                <View>
                    <Image
                        className="h-[70px] w-[70px]"
                        source={img}
                    />
                </View>
                <View className="flex items-start justify-center gap-1">
                    <Text
                        style={{ fontFamily: "plexMedium" }}
                        className="text-white text-lg"
                    >
                        Mightier
                    </Text>
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-xs text-neutral-400"
                    >
                        21cs124@kcgcollege.com
                    </Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const CustomDrawer = (props) => {
    return (
        <View className="flex-1">
            <ProfileComponent />
            <DrawerContentScrollView
                style={{ marginTop: 20 }}
                {...props}
            >
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
