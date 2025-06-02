import { getFontSize } from "@/app/helpers/getFontSize";
import { Text } from "../../Text"
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";

export const CategorySectionHeadlineTitle = () => {
    const fontSize4Xl = getFontSize('4xl');
    const fontSize6Xl = getFontSize('6xl');
    const fontSize7Xl = getFontSize('7xl');
    const fontFamilyPlayfair = getFontFamily('playfair');
    const colorLapis = getColor('lapis');
    const fontWeightBold = getFontWeight('bold');

    return (
        <>
            <div className="text-center md:hidden">
                <Text fontSize={fontSize4Xl} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightBold}
                    content={"Explore by Category"} />
            </div>
            <div className="text-center hidden md:inline xl:hidden">
                <Text fontSize={fontSize6Xl} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightBold}
                    content={"Explore by Category"} />
            </div>
            <div className="text-center hidden xl:inline">
                <Text fontSize={fontSize7Xl} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightBold}
                    content={"Explore by Category"} />
            </div>
        </>
    )
}