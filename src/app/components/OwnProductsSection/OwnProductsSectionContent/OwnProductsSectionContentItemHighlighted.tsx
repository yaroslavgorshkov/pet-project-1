import Image from "next/image"
import { Button } from "../../Button/Button";
import { Text } from "../../Text/Text";

type OwnProductsSectionContentItemHighlightedProps = {
    href: string;
    imgRef: string;
    alt: string;
}

export const OwnProductsSectionContentItemHighlighted = ({
    href,
    imgRef,
    alt
}: OwnProductsSectionContentItemHighlightedProps) => {
    const handleOwnProductsSectionContentItemHighlightedButtonClick = () => {
        // TODO: add OwnProductsSectionContentItemHighlighted button click function
    }

    return (
        <article className="relative w-[288px] h-[343px] md:w-[382px] md:h-[537px]">
            <div className="blur-sm contrast-[0.8] absolute inset-0 -z-10">
                <Image src={imgRef} alt={alt} fill objectFit="cover" className="rounded-[10px] brightness-[0.6]" />
            </div>
            <a href={href} className="absolute bottom-[40px] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 whitespace-nowrap">
                <Button buttonSize={"sm"} borderRadius={"sm"} backgroundColor={"white"}
                    onClick={handleOwnProductsSectionContentItemHighlightedButtonClick} variant={"contained"} >
                    <Text fontSize={"lg"} fontFamily={"roboto"} color={"absolute-black"} content={"Explore All Rooms"} />
                </Button>
            </a>
        </article>
    )
}