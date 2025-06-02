import { getFontSize } from "@/app/helpers/getFontSize";
import { Text } from "../../Text"
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";

export const HeroSectionTitleDescription = () => {
    const fontSizeLG = getFontSize('lg');
    const fontSize3XL = getFontSize('3xl');
    const fontFamilyOpensans = getFontFamily('opensans');
    const colorLapis = getColor('lapis');
    const fontWeightNormal = getFontWeight('normal');

    return (
        <>
            <div className="text-center md:hidden">
                <Text fontSize={fontSizeLG} fontFamily={fontFamilyOpensans} color={colorLapis} fontWeight={fontWeightNormal}
                    content={"Explore different categories. Find the best deals."} />
            </div>
            <div className="text-center hidden md:block">
                <Text fontSize={fontSize3XL} fontFamily={fontFamilyOpensans} color={colorLapis} fontWeight={fontWeightNormal}
                    content={"Explore different categories. Find the best deals."} />
            </div>
        </>
    )
}