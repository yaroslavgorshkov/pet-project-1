import { twMerge } from "tailwind-merge";
import { Text } from "../../Text/Text";
import { PopularProductsSectionContentItemImageContainer } from "./PopularProductsSectionContentItemImageContainer";
import { PopularProductsSectionContentItemName } from "./PopularProductsSectionContentItemName";

type PopularProductsSectionContentItemProps = {
    href: string;
    imgRef: string;
    name: string;
    description: string;
    price: number;
    backgroundColor: string;
    alt: string
}

export const PopularProductsSectionContentItem = ({
    href,
    imgRef,
    name,
    description,
    price,
    backgroundColor,
    alt
}: PopularProductsSectionContentItemProps) => {
    const combinedClassName = twMerge('flex flex-col gap-3xl px-el-md pt-el-5xl pb-el-md rounded-lg md:pt-el-8xl md:px-el-3xl md:pb-el-6xl', backgroundColor);
    const popularProductsSectionContentItemPrice = `$${price}`;

    return (
        <a href={href} className={combinedClassName}>
            <PopularProductsSectionContentItemImageContainer imgRef={imgRef} alt={alt} />
            <div className="flex flex-col">
                <PopularProductsSectionContentItemName name={name} />
                <div className="mt-4 md:mt-6">
                    <Text fontSize={"lg"} fontFamily={"opensans"} color={"mint"} content={description} />
                </div>
                <div className="mt-5 md:mt-6">
                    <Text fontSize={"3xl"} fontFamily={"opensans"} color={"mint"}
                        content={popularProductsSectionContentItemPrice} fontWeight={"bold"} />
                </div>
            </div>
        </a>
    )
}