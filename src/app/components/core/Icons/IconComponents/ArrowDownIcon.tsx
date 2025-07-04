import { IconProps } from '@/types';
import { getIconFillColor } from '@/core/Icons/helpers/getIconFillColor';
import { getIconSize } from '@/core/Icons/helpers/getIconSize';

export const ArrowDownIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.00021 9.52087C3.88171 9.52087 3.76806 9.4738 3.68427 9.39001C3.60047 9.30621 3.5534 9.19257 3.5534 9.07406L3.5534 1.03147C3.5534 0.912973 3.60047 0.799324 3.68427 0.71553C3.76806 0.631738 3.88171 0.584663 4.00021 0.584663C4.11871 0.584663 4.23236 0.631738 4.31615 0.71553C4.39995 0.799324 4.44702 0.912972 4.44702 1.03147L4.44702 9.07406C4.44702 9.19256 4.39995 9.30621 4.31615 9.39001C4.23236 9.4738 4.11871 9.52087 4.00021 9.52087Z"
                fill={iconFillColor}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.3164 10.284C4.27489 10.3256 4.22559 10.3586 4.17131 10.3812C4.11702 10.4037 4.05883 10.4153 4.00006 10.4153C3.94129 10.4153 3.88309 10.4037 3.82881 10.3812C3.77453 10.3586 3.72522 10.3256 3.68372 10.284L1.00285 7.60315C0.918953 7.51925 0.87182 7.40546 0.87182 7.28681C0.87182 7.16816 0.918953 7.05437 1.00285 6.97047C1.08675 6.88657 1.20054 6.83944 1.31919 6.83944C1.43785 6.83944 1.55164 6.88657 1.63554 6.97047L4.00006 9.33588L6.36458 6.97047C6.44848 6.88657 6.56227 6.83944 6.68092 6.83944C6.79957 6.83944 6.91336 6.88657 6.99726 6.97047C7.08116 7.05437 7.1283 7.16816 7.1283 7.28681C7.1283 7.40546 7.08116 7.51925 6.99726 7.60315L4.3164 10.284Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
