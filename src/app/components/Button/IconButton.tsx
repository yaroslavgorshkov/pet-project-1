import { getIcon } from "@/app/helpers/iconHelpers/getIcon";
import { IconFillColor, IconSize, IconType } from "../types"
import { ButtonBase } from "./ButtonBase"

type IconButtonProps = {
    iconType: IconType;
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
    const iconComponent = getIcon(iconType, iconFillColor, iconSize);

    return (
        <ButtonBase className={className} onClick={onClick}>
            {iconComponent}
        </ButtonBase>
    )
}