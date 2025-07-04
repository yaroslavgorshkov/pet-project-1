import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const InstagramIcon = ({ size, color }: IconProps) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5 0.5H7.5C3.35786 0.5 0 3.85786 0 8V20C0 24.1421 3.35786 27.5 7.5 27.5H19.5C23.6421 27.5 27 24.1421 27 20V8C27 3.85786 23.6421 0.5 19.5 0.5ZM24.375 20C24.3667 22.689 22.189 24.8668 19.5 24.875H7.49999C4.81102 24.8668 2.63322 22.689 2.62499 20V8C2.63322 5.31103 4.81102 3.13324 7.49999 3.125H19.5C22.189 3.13324 24.3667 5.31103 24.375 8V20ZM20.625 8.375C21.4534 8.375 22.125 7.70342 22.125 6.875C22.125 6.04657 21.4534 5.375 20.625 5.375C19.7966 5.375 19.125 6.04657 19.125 6.875C19.125 7.70342 19.7966 8.375 20.625 8.375ZM13.5 7.25001C9.77209 7.25001 6.75001 10.2721 6.75001 14C6.75001 17.7279 9.77209 20.75 13.5 20.75C17.2279 20.75 20.25 17.7279 20.25 14C20.254 12.2086 19.5441 10.4894 18.2774 9.22263C17.0107 7.9559 15.2914 7.24602 13.5 7.25001ZM9.375 14C9.375 16.2782 11.2218 18.125 13.5 18.125C15.7782 18.125 17.625 16.2782 17.625 14C17.625 11.7218 15.7782 9.875 13.5 9.875C11.2218 9.875 9.375 11.7218 9.375 14Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
