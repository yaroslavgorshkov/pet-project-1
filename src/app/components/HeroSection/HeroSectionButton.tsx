import { Text } from "../Text"
import { TextButton } from "../TextButton"
import { getBackgroundColor } from "@/app/helpers/getBackgroundColor";
import { getBorderRadius } from "@/app/helpers/getBorderRadius";
import { getFontSize } from "@/app/helpers/getFontSize";
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";
import { getPaddingInlineSize } from "@/app/helpers/getPaddingSize/getPaddingInlineSize";
import { getPaddingBlockSize } from "@/app/helpers/getPaddingSize/getPaddingBlockSize";

export const HeroSectionButton = () => {
    const fontSizeLG = getFontSize('lg');
    const fontSize3XL = getFontSize('3xl');
    const fontFamilyOpensans = getFontFamily('opensans');
    const colorWhite = getColor('white');
    const fontWeightBold = getFontWeight('bold');

    const pxLg = getPaddingInlineSize('lg');
    const px3Xl = getPaddingInlineSize('3xl');
    const pyMd = getPaddingBlockSize('md');
    const pyXl = getPaddingBlockSize('xl');
    const bgcMint = getBackgroundColor('mint');
    const roundedMD = getBorderRadius('md');


    return (
        <>
            <div className="md:hidden">
                <TextButton text={
                    <Text fontSize={fontSizeLG} fontFamily={fontFamilyOpensans} color={colorWhite} fontWeight={fontWeightBold}
                        content={"Shop Now"} />
                } px={pxLg} py={pyMd} bgc={bgcMint} rounded={roundedMD} />
            </div>
            <div className="hidden md:block">
                <TextButton text={
                    <Text fontSize={fontSize3XL} fontFamily={fontFamilyOpensans} color={colorWhite} fontWeight={fontWeightBold}
                        content={"Shop Now"} />
                } px={px3Xl} py={pyXl} bgc={bgcMint} rounded={roundedMD} />
            </div>
        </>
    )
}