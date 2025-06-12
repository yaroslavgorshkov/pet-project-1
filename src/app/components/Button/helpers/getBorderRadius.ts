import { BorderRadius } from "../buttonTypes";

const borderRadiusMap: Record<BorderRadius, string> = {
    md: "rounded-[10px]",
    sm: "rounded-[6px]"
}

export const getBorderRadius = (borderRadius: BorderRadius) => borderRadiusMap[borderRadius];