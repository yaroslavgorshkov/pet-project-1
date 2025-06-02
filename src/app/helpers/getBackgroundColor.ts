import { BackgroundColor } from "../components/types";

const backgroundColorMap: Record<BackgroundColor, string> = {
    mint: "bg-mint",
    white: "bg-white",
    "white-blue": "bg-white-blue"
}

export const getBackgroundColor = (bgc: BackgroundColor) => backgroundColorMap[bgc];