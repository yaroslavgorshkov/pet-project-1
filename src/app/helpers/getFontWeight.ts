import { FontWeight } from "../components/types";

const fontWeightMap: Record<FontWeight, string> = {
    normal: "font-normal",
    bold: "font-bold"
}

export const getFontWeight = (fontWeight: FontWeight) => fontWeightMap[fontWeight];