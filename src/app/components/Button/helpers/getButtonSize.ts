import { ButtonSize } from "../buttonTypes";

const buttonSizeMap: Record<ButtonSize, string> = {
    sm: "py-[16px] px-[20px] min-w-[170px] max-w-[100%]",
    md: "py-[24px] px-[30px] min-w-[230px] max-w-[100%]",
    lg: "py-[32px] px-[44px] min-w-[270px] max-w-[100%]"
}

export const getButtonSize = (buttonSize: ButtonSize) => buttonSizeMap[buttonSize];