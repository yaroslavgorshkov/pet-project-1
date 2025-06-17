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
        <article className="own-products-section__content-item group relative w-[231px] h-[324px] rounded-2xl shadow-lg md:w-[360px] md:h-[507px]">
            <div className="blur-[0] contrast-[1] absolute inset-0 -z-10 group-hover:blur-[5px] group-hover:contrast-[0.8] transition-filter duration-200">
                <Image src={imgRef} alt={alt} fill objectFit="cover" className="rounded-[16px] brightness-[0.6]" />
            </div>
            <a href={href} className="absolute bottom-[40px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 whitespace-nowrap hidden group-hover:block">
                <Button buttonSize={"sm"} borderRadius={"sm"} backgroundColor={"white"}
                    onClick={handleOwnProductsSectionContentItemButtonClick} variant={"contained"} >
                    <Text fontSize={"lg"} fontFamily={"roboto"} color={"absolute-black"} content={"Explore All Rooms"} />
                </Button>
            </a>
        </article>
    )
}