import { getDynamicIconComponent } from "@/app/components/Icons/helpers/getIconComponent";
import { IconFillColor, IconSize, DynamicIconType } from "../types"
import { ButtonBase } from "./ButtonBase"

type IconButtonProps = {
    iconType: DynamicIconType;
    iconFillColor: IconFillColor;
    iconSize: IconSize;
    className?: string;
    onClick: () => void;
}

export const IconButton = ({
    iconType,
    iconFillColor,
    iconSize,
    className = '',
    onClick
}: IconButtonProps) => {
    const iconComponent = getDynamicIconComponent(iconType, iconFillColor, iconSize);

    return (
        <ButtonBase className={className} onClick={onClick}>
            {iconComponent}
        </ButtonBase>
    )
}