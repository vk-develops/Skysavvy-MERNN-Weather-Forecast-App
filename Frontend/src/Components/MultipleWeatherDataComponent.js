import { View, Text } from "react-native";
import React, { useState } from "react";
import useGetWeatherData from "../Hooks/useGetWeatherData";

const MultipleWeatherDataComponent = () => {
    const [multipleWeatherData, setMultipleWeatherData] = useState([]);
    const cities = ["Beijing", "Mexico", "Paris", "London", "Tokyo"];

    const fetchWeatherOfCities = async () => {};

    return (
        <View>
            <Text>MultipleWeatherDataComponent</Text>
        </View>
    );
};

export default MultipleWeatherDataComponent;
