import { IconProps } from '../../types';
import { getIconFillColor } from '../helpers/getIconFillColor';
import { getIconSize } from '../helpers/getIconSize';

export const SearchIcon = ({ size, color }: IconProps) => {
    const iconFillColor = getIconFillColor(color);
    const iconSize = getIconSize(size);

    return (
        <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7607 15.1378L21.5482 19.9311C21.762 20.1689 21.7515 20.5329 21.5243 20.7579L20.6865 21.5968C20.5741 21.7102 20.4211 21.774 20.2616 21.774C20.102 21.774 19.949 21.7102 19.8367 21.5968L15.0491 16.8034C14.9167 16.6708 14.7965 16.5264 14.69 16.372L13.7924 15.1737C12.3071 16.3612 10.4627 17.0077 8.56196 17.0072C4.64527 17.0208 1.24181 14.3157 0.366529 10.4934C-0.508749 6.67117 1.37775 2.75181 4.90917 1.05573C8.44059 -0.640348 12.6744 0.339511 15.1042 3.4152C17.5339 6.4909 17.511 10.8416 15.0491 13.8915L16.246 14.7183C16.4329 14.8381 16.6056 14.9788 16.7607 15.1378ZM2.57727 8.6188C2.57727 11.9279 5.2566 14.6105 8.56172 14.6105C10.1489 14.6105 11.6711 13.9792 12.7934 12.8555C13.9157 11.7319 14.5462 10.2079 14.5462 8.6188C14.5462 5.30969 11.8668 2.62713 8.56172 2.62713C5.2566 2.62713 2.57727 5.30969 2.57727 8.6188Z"
                fill={iconFillColor}
            />
        </svg>
    );
};
