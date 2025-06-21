import { FontWeight } from '../textTypes';

const fontWeightMap: Record<FontWeight, string> = {
    normal: 'font-normal',
    bold: 'font-bold',
};

export const getFontWeight = (fontWeight: FontWeight) =>
    fontWeightMap[fontWeight];
