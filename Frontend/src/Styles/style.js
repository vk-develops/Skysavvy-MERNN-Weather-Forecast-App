import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = {
    paraText: `${
        width < 400 ? `text-sm` : `text-base`
    } text-[#aaa] text-center`,
};

console.log(width);

export { styles };
