import { twMerge } from "tailwind-merge";
import { getColor } from "./helpers/getColor";
import { getFontFamily } from "./helpers/getFontFamily";
import { getFontSize } from "./helpers/getFontSize";
import { getFontWeight } from "./helpers/getFontWeight";
import { Color, FontFamily, FontSize, FontWeight } from "./textTypes";

type TextProps = {
    fontSize: FontSize;
    fontFamily: FontFamily;
    color: Color;
    fontWeight?: FontWeight;
    content: string;
    className?: string
}

export const Text = ({
    fontSize,
    fontFamily,
    color,
    fontWeight = 'normal',
    content,
    className = ""
}: TextProps) => {
    const fontSizeClass = getFontSize(fontSize);
    const fontFamilyClass = getFontFamily(fontFamily);
    const colorClass = getColor(color);
    const fontWeightClass = getFontWeight(fontWeight);

    const combinedClassName = twMerge(fontSizeClass, fontFamilyClass, colorClass, fontWeightClass, className);

    return (
        <span className={combinedClassName}>
            {content}
        </span>
    )
}