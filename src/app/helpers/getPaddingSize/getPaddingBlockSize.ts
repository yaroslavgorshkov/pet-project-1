import { PaddingBlockSize } from "../../components/types";

const paddingBlockSizeMap: Record<PaddingBlockSize, string> = {
    sm: "py-[14px]",
    md: "py-[16px]",
    lg: "py-[20px]",
    xl: "py-[24px]",
    "2xl": "py-[32px]",
}

export const getPaddingBlockSize = (paddingSize: PaddingBlockSize) => paddingBlockSizeMap[paddingSize];