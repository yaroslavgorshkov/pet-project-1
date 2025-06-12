import Image from "next/image";
import { CategorySectionContentItemText } from "./CategorySectionContentItemText";
import { Button } from "@/app/components/Button/Button";
import { ButtonProps } from "@/app/components/Button/buttonTypes";
import { Text } from "@/app/components/Text/Text";

type CategorySectionContentItemProps = {
    text: string;
    href: string;
    imgRef: string;
    alt: string;
    isHighlighted?: boolean
}

export const CategorySectionContentItem = ({
    text,
    href,
    imgRef,
    alt,
    isHighlighted = false
}: CategorySectionContentItemProps) => {
    const handleCategorySectionContentItemButtonClick = () => {
        // TODO: add CategorySectionContentItem button click function
    }

    const categorySectionContentItemButtonSmProps: Omit<ButtonProps, "children"> = {
        buttonSize: "sm",
        borderRadius: "sm",
        variant: "contained",
        backgroundColor: "white-blue",
        onClick: handleCategorySectionContentItemButtonClick
    }

    return (
        <article className={`category-section__content-item rounded-[10px] relative h-[211px] md:h-[277px] xl:h-auto ${isHighlighted ? 'category-section__content-item--highlighted' : ''}`}>
            <div className="category-section__content-item-text-wrapper">
                <CategorySectionContentItemText text={text} />
            </div>
            <a href={href} className="category-section__content-item-button">
                <Button {...categorySectionContentItemButtonSmProps}>
                    <Text fontSize={"lg"} fontFamily={"opensans"} color={"lapis"} content={"Explore"} />
                </Button>
            </a>
            <div className="category-section__content-item-image absolute inset-0">
                <Image src={imgRef} alt={alt} fill className="rounded-[10px] brightness-[0.6]" objectFit="cover" />
            </div>
        </article>
    )
}