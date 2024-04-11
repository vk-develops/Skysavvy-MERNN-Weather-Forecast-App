import { View, Text } from "react-native";
import React from "react";
import {
    DrawerItemList,
    DrawerContentScrollView,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <View className="flex-1">
            <Text>CustomDrawer</Text>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;
