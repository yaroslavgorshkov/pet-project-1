import { ReactNode } from "react";
import { BorderRadius, ButtonBackgroundColor, IconFillColor, IconSize, IconType, PaddingBlockSize, PaddingInlineSize } from "../types";
import { ButtonBase } from "./ButtonBase"
import { getButtonVariant } from "@/app/helpers/getButtonVariant";
import { getPaddingInlineSize } from "@/app/helpers/getPaddingSize/getPaddingInlineSize";
import { getIcon } from "@/app/helpers/iconHelpers/getIcon";
import { getBorderRadius } from "@/app/helpers/getBorderRadius";
import { getPaddingBlockSize } from "@/app/helpers/getPaddingSize/getPaddingBlockSize";
import { getBackgroundColor } from "@/app/helpers/getBackgroundColor";

type EndIconType = {
    iconType: IconType;
    iconSize: IconSize;
    iconFillColor: IconFillColor;
}

type CommonButtonProps = {
    paddingInline: PaddingInlineSize;
    paddingBlock: PaddingBlockSize;
    endIcon?: EndIconType;
    borderRadius: BorderRadius;
    text: ReactNode;
    className?: string;
    onClick: () => void
}

type ContainedButtonProps = CommonButtonProps & {
    variant: "contained";
    backgroundColor: ButtonBackgroundColor;
};

type SecondarybuttonProps = CommonButtonProps & {
    variant: "secondary";
    backgroundColor?: never;
}

type ButtonProps = ContainedButtonProps | SecondarybuttonProps;

export const Button = ({
    variant,
    backgroundColor,
    paddingInline,
    paddingBlock,
    endIcon,
    borderRadius,
    text,
    className = '',
    onClick
}: ButtonProps) => {
    const variantClass = getButtonVariant(variant);
    const paddingInlineClass = getPaddingInlineSize(paddingInline);
    const paddingBlockClass = getPaddingBlockSize(paddingBlock);
    const borderRadiusClass = getBorderRadius(borderRadius);

    const endIconComponent = endIcon ? getIcon(endIcon.iconType, endIcon.iconFillColor, endIcon.iconSize) : '';
    const backgroundColorClass = backgroundColor ? getBackgroundColor(backgroundColor) : '';

    const combinedClassName = `${variantClass} ${paddingInlineClass} ${paddingBlockClass} 
    ${backgroundColorClass} ${borderRadiusClass} ${className}`;

    let children;
    if (endIcon) {
        children = (
            <div className="flex gap-[18px]">
                {text}
                <div className="flex justify-center items-center">
                    {endIconComponent}
                </div>
            </div>
        )
    } else {
        children = text
    }

    return (
        <ButtonBase className={combinedClassName} onClick={onClick}>
            {children}
        </ButtonBase>
    )
}