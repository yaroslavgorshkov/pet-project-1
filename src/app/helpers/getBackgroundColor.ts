import { ButtonBackgroundColor } from "../components/types";

const backgroundColorMap: Record<ButtonBackgroundColor, string> = {
    mint: "bg-mint",
    white: "bg-white",
    "white-blue": "bg-white-blue"
}

export const getBackgroundColor = (bgc: ButtonBackgroundColor) => backgroundColorMap[bgc];