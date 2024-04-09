import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { sampleCities } from "../../Data/sampleCities";

const DisplaySampleCities = () => {
    return (
        <View>
            {sampleCities.map((city, index) => (
                <TouchableOpacity
                    key={index}
                    className="flex items-center justify-start flex-row border-b-[1px] border-neutral-200 py-6"
                >
                    <Text
                        className="text-neutral-200 text-base"
                        style={{ fontFamily: "plexMedium" }}
                    >
                        {city.name},{" "}
                    </Text>
                    <Text
                        className="text-neutral-200 text-base"
                        style={{ fontFamily: "plexMedium" }}
                    >
                        {city.location}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const SearchScreen = () => {
    const [search, setSearch] = useState("");

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
                <View className="m-5">
                    <View>
                        <Text
                            style={{ fontFamily: "plexSemiBold" }}
                            className="text-white text-[22px] pt-2 pb-7"
                        >
                            Search Locations
                        </Text>
                        <View
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                            }}
                            className="p-[14px] rounded-full mb-4 flex items-center justify-start flex-row gap-1"
                        >
                            <Feather
                                name="search"
                                size={24}
                                color="white"
                            />
                            <TextInput
                                className="text-base text-neutral-300 pl-2"
                                placeholderTextColor={"#ccc"}
                                placeholder="Search for location"
                            />
                        </View>
                        <View>
                            <Text
                                style={{ fontFamily: "plexSemiBold" }}
                                className="text-white text-[22px] pt-2 "
                            >
                                Popular Searches
                            </Text>
                            <DisplaySampleCities />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default SearchScreen;
