import { TextAlign } from "../components/types";

const textAlignMap: Record<TextAlign, string> = {
    center: "text-center",
    left: "text-left"
}

export const getTextAlign = (textAlign: TextAlign) => textAlignMap[textAlign];