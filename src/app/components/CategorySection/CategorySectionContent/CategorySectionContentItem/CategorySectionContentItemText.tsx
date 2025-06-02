import { getFontSize } from "@/app/helpers/getFontSize"
import { Text } from "../../../Text"
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";

type CategorySectionContentItemTextProps = {
    text: string;
}

export const CategorySectionContentItemText = ({
    text
}: CategorySectionContentItemTextProps) => {
    const fontSize5Xl = getFontSize('5xl');
    const fontSize7Xl = getFontSize('7xl');
    const fontFamilyPlayfair = getFontFamily('playfair');
    const colorWhite = getColor('white');
    const fontWeightNormal = getFontWeight('normal');

    return (
        <>
            <div className="2xl:hidden">
                <Text fontSize={fontSize5Xl} fontFamily={fontFamilyPlayfair} color={colorWhite} fontWeight={fontWeightNormal}
                    content={text} />
            </div>
            <div className="hidden 2xl:block">
                <Text fontSize={fontSize7Xl} fontFamily={fontFamilyPlayfair} color={colorWhite} fontWeight={fontWeightNormal}
                    content={text} />
            </div>
        </>
    )
}