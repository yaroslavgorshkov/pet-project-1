import { Text } from "@/app/components/Text"
import { getColor } from "@/app/helpers/getColor";
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getFontSize } from "@/app/helpers/getFontSize";
import { getFontWeight } from "@/app/helpers/getFontWeight";

type HeaderDesktopNavigationListItemProps = {
    text: string;
    ref: string;
    isHighlighted?: boolean;
}

export const HeaderDesktopNavigationListItem = ({
    text,
    ref,
    isHighlighted = false
}: HeaderDesktopNavigationListItemProps) => {
    const fontWeightNormal = getFontWeight('normal');
    const fontSizeXl = getFontSize('xl');
    const fontFamilyPlayfair = getFontFamily('playfair');
    const colorLapis = getColor('lapis');

    return (
        <li>
            <a href={ref}>
                <Text fontSize={fontSizeXl} fontFamily={fontFamilyPlayfair} color={colorLapis} fontWeight={fontWeightNormal} content={text}
                    className={`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`}
                />
            </a>
        </li>
    )
}