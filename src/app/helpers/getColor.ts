import { Color } from "../components/types";

const colorMap: Record<Color, string> = {
    lapis: "text-lapis",
    white: "text-white",
    mint: "text-mint",
    "absolute-black": "text-absolute-black"
}

export const getColor = (color: Color) => colorMap[color];