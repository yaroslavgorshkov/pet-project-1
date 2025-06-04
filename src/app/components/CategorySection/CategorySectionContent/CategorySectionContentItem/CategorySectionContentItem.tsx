import { Text } from "../../../Text"
import Image from "next/image";
import { CategorySectionContentItemText } from "./CategorySectionContentItemText";
import { Button } from "@/app/components/Button/Button";

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
    const categorySectionContentItemButtonText = (
        <Text fontSize={"lg"} fontFamily={"opensans"} color={"lapis"} fontWeight={"normal"}
            content={"Explore"} />
    )

    return (
        <article className={`category-section__content-item rounded-[10px] relative h-[211px] md:h-[277px] xl:h-auto ${isHighlighted ? 'category-section__content-item--highlighted' : ''}`}>
            <div className="category-section__content-item-text-wrapper">
                <CategorySectionContentItemText text={text} />
            </div>
            <a href={ref} className="category-section__content-item-button">
                <Button variant={"contained"} backgroundColor={"white-blue"} paddingInline={"xl"} paddingBlock={"sm"}
                    borderRadius={"sm"} text={categorySectionContentItemButtonText} onClick={() => 1} />
            </a>
            <div className="category-section__content-item-image absolute inset-0">
                <Image src={imgRef} alt={alt} fill className="rounded-[10px] brightness-[0.6]" objectFit="cover" />
            </div>
        </article>
    )
}