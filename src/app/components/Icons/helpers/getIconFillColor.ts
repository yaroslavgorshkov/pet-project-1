import { IconFillColor } from '@/app/components/types';

const iconFillColorMap: Record<IconFillColor, string> = {
    lapis: '#07484A',
    gray: '#6E757E',
    white: '#FDFBF8',
    'absolute-white': '#fff',
};

export const getIconFillColor = (iconFill: IconFillColor) =>
    iconFillColorMap[iconFill];
