import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const FacebookIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27 3.11111V24.8889C27 26.6071 25.6569 28 24 28H18.375C17.9608 28 17.625 27.6518 17.625 27.2222V17.8889H21.135C21.4915 17.889 21.7987 17.6289 21.87 17.2667L22.41 14.4667C22.4323 14.3536 22.405 14.236 22.3354 14.1459C22.2659 14.0557 22.1613 14.0023 22.05 14H17.625V8.94444C17.625 8.72967 17.7929 8.55556 18 8.55556H21.75C22.1642 8.55556 22.5 8.20733 22.5 7.77778V5.44444C22.5 5.01489 22.1642 4.66667 21.75 4.66667H18C15.5147 4.66667 13.5 6.756 13.5 9.33333V14H11.655C11.2408 14 10.905 14.3482 10.905 14.7778V17.1111C10.905 17.5407 11.2408 17.8889 11.655 17.8889H13.5V27.2222C13.5 27.6518 13.1642 28 12.75 28H3C1.34315 28 0 26.6071 0 24.8889V3.11111C0 1.39289 1.34315 0 3 0H24C25.6569 0 27 1.39289 27 3.11111Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
