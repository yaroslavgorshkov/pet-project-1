import { ButtonBase } from './ButtonBase';
import { twMerge } from 'tailwind-merge';
import { getButtonSize } from './helpers/getButtonSize';
import { ButtonProps } from './buttonTypes';
import { getButtonVariant } from './helpers/getButtonVariant';
import { getBorderRadius } from './helpers/getBorderRadius';
import { getDynamicIconComponent } from '../Icons/helpers/getIconComponent';
import { getBackgroundColor } from './helpers/getBackgroundColor';

export const Button = ({
    buttonSize,
    borderRadius,
    variant,
    backgroundColor,
    children,
    endIcon,
    className = '',
    onClick,
}: ButtonProps) => {
    const variantClass = getButtonVariant(variant);
    const buttonSizeClass = getButtonSize(buttonSize);
    const borderRadiusClass = getBorderRadius(borderRadius);

    const endIconComponent = endIcon
        ? getDynamicIconComponent(
              endIcon.iconType,
              endIcon.iconFillColor,
              endIcon.iconSize
          )
        : null;
    const backgroundColorClass = backgroundColor
        ? getBackgroundColor(backgroundColor)
        : '';

    const combinedButtonClassName = twMerge(
        variantClass,
        buttonSizeClass,
        backgroundColorClass,
        borderRadiusClass,
        className
    );

    if (endIcon) {
        return (
            <ButtonBase className={combinedButtonClassName} onClick={onClick}>
                <div className="flex justify-center gap-md">
                    {children}
                    <div className="flex justify-center items-center">
                        {endIconComponent}
                    </div>
                </div>
            </ButtonBase>
        );
    }

    return (
        <ButtonBase className={combinedButtonClassName} onClick={onClick}>
            {children}
        </ButtonBase>
    );
};
