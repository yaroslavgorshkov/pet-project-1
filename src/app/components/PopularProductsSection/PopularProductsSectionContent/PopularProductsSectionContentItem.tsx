import { Text } from "../../Text";
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
    return (
        <a href={href} className={`flex flex-col gap-[40px] px-5 pt-[49px] pb-5 rounded-[16px] md:pt-[84px] md:px-10 md:pb-[60px] ${backgroundColor}`}>
            <PopularProductsSectionContentItemImageContainer imgRef={imgRef} alt={alt} />
            <div className="flex flex-col">
                <PopularProductsSectionContentItemName name={name} />
                <div className="mt-[14px] md:mt-[23px]">
                    <Text fontSize={"lg"} fontFamily={"opensans"} color={"mint"} content={description} />
                </div>
                <div className="mt-[20px] md:mt-[22px]">
                    <Text fontSize={"3xl"} fontFamily={"opensans"} color={"mint"} content={`$${price}`} fontWeight={"bold"} />
                </div>
            </div>
        </a>
    )
}