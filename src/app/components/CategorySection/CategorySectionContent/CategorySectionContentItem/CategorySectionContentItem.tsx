import { getFontSize } from "@/app/helpers/getFontSize"
import { Text } from "../../../Text"
import { getFontFamily } from "@/app/helpers/getFontFamily";
import { getColor } from "@/app/helpers/getColor";
import { getFontWeight } from "@/app/helpers/getFontWeight";
import { TextButton } from "../../../TextButton";
import { getPaddingInlineSize } from "@/app/helpers/getPaddingSize/getPaddingInlineSize";
import { getPaddingBlockSize } from "@/app/helpers/getPaddingSize/getPaddingBlockSize";
import { getBackgroundColor } from "@/app/helpers/getBackgroundColor";
import { getBorderRadius } from "@/app/helpers/getBorderRadius";
import Image from "next/image";
import { CategorySectionContentItemText } from "./CategorySectionContentItemText";

type CategorySectionContentItemProps = {
    text: string;
    ref: string;
    imgRef: string;
    alt: string;
    isHighlighted?: boolean
}

export const CategorySectionContentItem = ({
    text,
    ref,
    imgRef,
    alt,
    isHighlighted = false
}: CategorySectionContentItemProps) => {
    const fontSizeLg = getFontSize('lg');
    const fontFamilyOpensans = getFontFamily('opensans');
    const colorLapis = getColor('lapis');
    const fontWeightNormal = getFontWeight('normal');

    const pxXl = getPaddingInlineSize('xl');
    const pySm = getPaddingBlockSize('sm');
    const bgcWhiteBlue = getBackgroundColor('white-blue');
    const roundedSm = getBorderRadius('sm');

    return (
        <article className={`category-section__content-item rounded-[10px] relative h-[211px] md:h-[277px] xl:h-auto ${isHighlighted ? 'category-section__content-item--highlighted' : ''}`}>
            <div className="category-section__content-item-text-wrapper">
                <CategorySectionContentItemText text={text} />
            </div>
            <a href={ref} className="category-section__content-item-button">
                <TextButton text={
                    <Text fontSize={fontSizeLg} fontFamily={fontFamilyOpensans} color={colorLapis}
                        fontWeight={fontWeightNormal} content={"Explore"} />
                } px={pxXl} py={pySm} bgc={bgcWhiteBlue} rounded={roundedSm} />
            </a>
            <div className="category-section__content-item-image absolute inset-0">
                <Image src={imgRef} alt={alt} fill className="rounded-[10px] brightness-[0.6]" objectFit="cover" />
            </div>
        </article>
    )
}