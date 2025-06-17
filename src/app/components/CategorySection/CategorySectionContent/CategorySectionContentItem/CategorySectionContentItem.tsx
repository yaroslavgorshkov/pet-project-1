import Image from "next/image";
import { CategorySectionContentItemText } from "./CategorySectionContentItemText";
import { Button } from "@/app/components/Button/Button";
import { ButtonProps } from "@/app/components/Button/buttonTypes";
import { Text } from "@/app/components/Text/Text";
import { twMerge } from "tailwind-merge";

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

    const highlightedCategorySectionContentItemTextClass = isHighlighted ? "top-[33%] [text-shadow:none]" : "top-[50%] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] transition-all duration-200 group-hover:top-[33%] group-hover:[text-shadow:none]";
    const combinedClassNameCategorySectionContentItemText =
        twMerge("absolute left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 whitespace-nowrap",
            highlightedCategorySectionContentItemTextClass);

    const highlightedCategorySectionContentItemButtonClass = isHighlighted ? "block" : "hidden group-hover:block";
    const combinedClassNameCategorySectionContentItemButton =
        twMerge("absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10",
            highlightedCategorySectionContentItemButtonClass);

    const highlightedCategorySectionContentItemImageClass = isHighlighted ? "blur-[5px] contrast-[0.8]" : "blur-0 contrast-1 transition-all duration-200 group-hover:blur-[5px] group-hover:contrast-[0.8]";
    const combinedClassNameCategorySectionContentItemImage =
        twMerge("absolute inset-0",
            highlightedCategorySectionContentItemImageClass);

    return (
        <article className="group rounded-[10px] relative h-[211px] md:h-[277px] xl:h-auto">
            <div className={combinedClassNameCategorySectionContentItemText}>
                <CategorySectionContentItemText text={text} />
            </div>
            <a href={href} className={combinedClassNameCategorySectionContentItemButton}>
                <Button {...categorySectionContentItemButtonSmProps}>
                    <Text fontSize={"lg"} fontFamily={"opensans"} color={"lapis"} content={"Explore"} />
                </Button>
            </a>
            <div className={combinedClassNameCategorySectionContentItemImage}>
                <Image src={imgRef} alt={alt} fill className="rounded-[10px] brightness-[0.6]" objectFit="cover" />
            </div>
        </article>
    )
}