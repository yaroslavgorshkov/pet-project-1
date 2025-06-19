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
        <article className="relative w-auto min-w-xl h-auto min-h-xl md:min-w-3xl md:min-h-3xl">
            <div className="blur-sm contrast-[0.8] absolute inset-0 -z-10">
                <Image src={imgRef} alt={alt} fill objectFit="cover" className="rounded-md brightness-[0.6]" />
            </div>
            <a href={href} className="absolute bottom-el-xl left-half -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap">
                <Button buttonSize={"sm"} borderRadius={"sm"} backgroundColor={"white"}
                    onClick={handleOwnProductsSectionContentItemHighlightedButtonClick} variant={"contained"} >
                    <Text fontSize={"lg"} fontFamily={"roboto"} color={"absolute-black"} content={"Explore All Rooms"} />
                </Button>
            </a>
        </article>
    )
}