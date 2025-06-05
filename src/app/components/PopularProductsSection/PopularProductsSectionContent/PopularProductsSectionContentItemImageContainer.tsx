import Image from "next/image"

type PopularProductsSectionContentItemImageContainerProps = {
    imgRef: string;
    alt: string;
}

export const PopularProductsSectionContentItemImageContainer = ({
    imgRef,
    alt
}: PopularProductsSectionContentItemImageContainerProps) => {
    return (
        <div className="px-[54px] md:px-[66px] xl:px-[73px]">
            <div className="relative w-[89px] h-[117px] md:w-[204px] md:h-[268px]">
                <Image src={imgRef} alt={alt} fill />
            </div>
        </div>
    )
}