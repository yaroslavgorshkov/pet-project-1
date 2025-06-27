import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const AccountIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.625 0.0239258C4.89505 0.0239258 0.25 4.66897 0.25 10.3989C0.25 16.1289 4.89505 20.7739 10.625 20.7739C16.355 20.7739 21 16.1289 21 10.3989C21 7.64731 19.9069 5.00838 17.9612 3.06269C16.0155 1.117 13.3766 0.0239258 10.625 0.0239258ZM10.6251 3.13635C12.3441 3.13635 13.7376 4.52986 13.7376 6.24885C13.7376 7.96783 12.3441 9.36135 10.6251 9.36135C8.90609 9.36135 7.51258 7.96783 7.51258 6.24885C7.51258 4.52986 8.90609 3.13635 10.6251 3.13635ZM10.6246 17.6478C12.9228 17.6478 15.0853 16.56 16.4554 14.715C16.6677 14.4046 16.6955 14.0037 16.528 13.6671L16.2894 13.1795C15.7673 12.114 14.685 11.438 13.4985 11.4365H7.75077C6.54739 11.4378 5.45258 12.1326 4.93914 13.221L4.72127 13.6775C4.55787 14.0113 4.58558 14.4071 4.79389 14.715C6.16398 16.56 8.3265 17.6478 10.6246 17.6478Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
