import { getFontSize } from "@/app/helpers/getFontSize"
import { Text } from "../../Text"
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";

export const HeroSectionTitleText = () => {
    const fontSize5XL = getFontSize('5xl');
    const fontSize6XL = getFontSize('6xl');
    const fontSize7XL = getFontSize('7xl');
    const fontFamilyPlayfair = getFontFamily('playfair');
    const colorLapis = getColor('lapis');
    const fontWeightBold = getFontWeight('bold');

    return (
        <>
            <div className="text-center md:hidden">
                <Text fontSize={fontSize5XL} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightBold}
                    content={"Exclusive Deals of Furniture Collection"} />
            </div>
            <div className="hidden text-start w-[67%] md:block xl:hidden">
                <Text fontSize={fontSize6XL} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightBold}
                    content={"Exclusive Deals of Furniture Collection"} />
            </div>
            <div className="hidden text-start w-[67%] xl:block">
                <Text fontSize={fontSize7XL} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightBold}
                    content={"Exclusive Deals of Furniture Collection"} />
            </div>
        </>
    )
}