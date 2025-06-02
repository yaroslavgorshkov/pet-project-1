import { PaddingInlineSize } from "../../components/types";

const paddingInlineSizeMap: Record<PaddingInlineSize, string> = {
    sm: "px-[24px]",
    md: "px-[38px]",
    lg: "px-[40px]",
    xl: "px-[44px]",
    "2xl": "px-[50px]",
    "3xl": "px-[54px]",
    "4xl": "px-[72px]"
}

export const getPaddingInlineSize = (paddingSize: PaddingInlineSize) => paddingInlineSizeMap[paddingSize];