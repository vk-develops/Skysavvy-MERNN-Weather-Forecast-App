const ReturnHourlyImgString = (weatherData) => {
    const isDay = weatherData.is_day === 1;
    const timeOfDay = isDay ? "Day" : "Night";
    const image = weatherData.condition.text.replace(/\s/g, "") + timeOfDay;

    return { image };
};

export default ReturnHourlyImgString;
