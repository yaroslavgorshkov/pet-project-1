import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const HamburgerMenuIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.3333 3.33341H0.666667C0.298477 3.33341 0 3.03494 0 2.66675V1.33341C0 0.965225 0.298477 0.666748 0.666667 0.666748H23.3333C23.7015 0.666748 24 0.965225 24 1.33341V2.66675C24 3.03494 23.7015 3.33341 23.3333 3.33341ZM24 10.6669V9.33354C24 8.96535 23.7015 8.66687 23.3333 8.66687H0.666667C0.298477 8.66687 0 8.96535 0 9.33354V10.6669C0 11.0351 0.298477 11.3335 0.666667 11.3335H23.3333C23.7015 11.3335 24 11.0351 24 10.6669ZM24 17.3335V18.6668C24 19.035 23.7015 19.3335 23.3333 19.3335H0.666667C0.298477 19.3335 0 19.035 0 18.6668V17.3335C0 16.9653 0.298477 16.6668 0.666667 16.6668H23.3333C23.7015 16.6668 24 16.9653 24 17.3335Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
