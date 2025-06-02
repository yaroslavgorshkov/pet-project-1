import { getFontSize } from "@/app/helpers/getFontSize"
import { Text } from "@/app/components/Text";
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getFontWeight } from "@/app/helpers/getFontWeight";
import { getColor } from "@/app/helpers/getColor";

type CategorySectionMenuNavigationListItem = {
    text: string;
    ref: string;
    isHighlighted?: boolean;
}

export const CategorySectionMenuNavigationListItem = ({
    text,
    ref,
    isHighlighted = false
}: CategorySectionMenuNavigationListItem) => {
    const fontSize3Xl = getFontSize('3xl');
    const fontFamilyRoboto = getFontFamily('roboto');
    const fontWeightNormal = getFontWeight('normal');
    const colorLapis = getColor('lapis');

    return (
        <li>
            <a href={ref}>
                <Text fontSize={fontSize3Xl} fontFamily={fontFamilyRoboto} color={colorLapis} fontWeight={fontWeightNormal} content={text}
                    className={`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`}
                />
            </a>
        </li>
    )
}