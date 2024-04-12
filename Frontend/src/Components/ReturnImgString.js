const ReturnImgString = (weatherData) => {
    const isDay = weatherData.current.is_day === 1;
    const timeOfDay = isDay ? "Day" : "Night";
    const image =
        weatherData.current.condition.text.replace(/\s/g, "") + timeOfDay;

    return { image };
};

export default ReturnImgString;
