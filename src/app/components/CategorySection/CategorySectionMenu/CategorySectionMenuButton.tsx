import { getFontSize } from "@/app/helpers/getFontSize"
import { Text } from "../../Text"
import { TextIconButton } from "../../TextIconButton"
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";
import { getPaddingInlineSize } from "@/app/helpers/getPaddingSize/getPaddingInlineSize";
import { getPaddingBlockSize } from "@/app/helpers/getPaddingSize/getPaddingBlockSize";
import { getBackgroundColor } from "@/app/helpers/getBackgroundColor";
import { getBorderRadius } from "@/app/helpers/getBorderRadius";

export const CategorySectionMenuButton = () => {
    const fontSizeLg = getFontSize('lg');
    const fontFamilyOpensans = getFontFamily('opensans');
    const colorWhite = getColor('white');
    const fontWeightBold = getFontWeight('bold');

    const px2Xl = getPaddingInlineSize('2xl');
    const py2Xl = getPaddingBlockSize('2xl');
    const bgcMint = getBackgroundColor('mint');
    const roundedMd = getBorderRadius('md');

    return (
        <TextIconButton text={
            <Text fontSize={fontSizeLg} fontFamily={fontFamilyOpensans} color={colorWhite} fontWeight={fontWeightBold}
                content={"All Categories"} />
        } icon={
            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5553 13.2273C13.4689 13.141 13.4003 13.0386 13.3535 12.9258C13.3067 12.813 13.2826 12.6921 13.2826 12.57C13.2826 12.4479 13.3067 12.3269 13.3535 12.2142C13.4003 12.1014 13.4689 11.9989 13.5553 11.9127L18.4701 6.99976L13.5553 2.08683C13.381 1.9125 13.2831 1.67607 13.2831 1.42954C13.2831 1.18301 13.381 0.946579 13.5553 0.772256C13.7297 0.597933 13.9661 0.5 14.2126 0.5C14.4592 0.5 14.6956 0.597933 14.8699 0.772256L20.4401 6.34247C20.5266 6.42871 20.5952 6.53116 20.642 6.64394C20.6888 6.75673 20.7129 6.87764 20.7129 6.99976C20.7129 7.12187 20.6888 7.24278 20.642 7.35557C20.5952 7.46836 20.5266 7.5708 20.4401 7.65704L14.8699 13.2273C14.7837 13.3137 14.6812 13.3823 14.5684 13.4291C14.4556 13.4759 14.3347 13.5 14.2126 13.5C14.0905 13.5 13.9696 13.4759 13.8568 13.4291C13.744 13.3823 13.6416 13.3137 13.5553 13.2273Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.287109 6.99985C0.287109 6.75363 0.38492 6.5175 0.559023 6.3434C0.733126 6.16929 0.96926 6.07148 1.21548 6.07148L17.9261 6.07148C18.1723 6.07148 18.4085 6.16929 18.5826 6.3434C18.7567 6.5175 18.8545 6.75363 18.8545 6.99985C18.8545 7.24607 18.7567 7.48221 18.5826 7.65631C18.4085 7.83041 18.1723 7.92822 17.9261 7.92822L1.21548 7.92822C0.96926 7.92822 0.733126 7.83041 0.559023 7.65631C0.38492 7.48221 0.287109 7.24607 0.287109 6.99985Z" fill="white" />
            </svg>
        } px={px2Xl} py={py2Xl} bgc={bgcMint} rounded={roundedMd} />
    )
}