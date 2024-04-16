import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
    DrawerItemList,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const ProfileComponent = ({ name, email, navigation }) => {
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
            <TouchableOpacity
                onPress={() => navigation.navigate("ProfileTab")}
                activeOpacity={0.8}
                className="flex items-center justify-start flex-row gap-2 absolute bottom-8 left-2"
            >
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
                        {name}
                    </Text>
                    <Text
                        style={{ fontFamily: "plexRegular" }}
                        className="text-xs text-neutral-400"
                    >
                        {email}
                    </Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const CustomDrawer = (props) => {
    const { user } = useSelector((state) => state.auth);

    const { navigation } = props;

    return (
        <View className="flex-1">
            {user ? (
                <ProfileComponent
                    name={user.name}
                    email={user.email}
                    navigation={navigation}
                />
            ) : null}

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
