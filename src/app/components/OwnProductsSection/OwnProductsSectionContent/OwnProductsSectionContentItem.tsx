import { Button } from "../../Button/Button"
import { Text } from "../../Text/Text"
import Image from "next/image"

type OwnProductsSectionContentItemProps = {
    href: string;
    imgRef: string;
    alt: string;
}

export const OwnProductsSectionContentItem = ({
    href,
    imgRef,
    alt
}: OwnProductsSectionContentItemProps) => {
    const handleOwnProductsSectionContentItemButtonClick = () => {
        // TODO: add OwnProductsSectionContentItem button click function
    }

    return (
        <article className="own-products-section__content-item relative w-[231px] h-[324px] rounded-[16px] shadow-lg md:w-[360px] md:h-[507px]">
            <div className="own-products-section__content-item-image-wrapper absolute inset-0 -z-10">
                <Image src={imgRef} alt={alt} fill objectFit="cover" className="rounded-[16px] brightness-[0.6]" />
            </div>
            <a href={href} className="own-products-section__content-item-button whitespace-nowrap">
                <Button buttonSize={"sm"} borderRadius={"sm"} backgroundColor={"white"}
                    onClick={handleOwnProductsSectionContentItemButtonClick} variant={"contained"} >
                    <Text fontSize={"lg"} fontFamily={"roboto"} color={"absolute-black"} content={"Explore All Rooms"} />
                </Button>
            </a>
        </article>
    )
}