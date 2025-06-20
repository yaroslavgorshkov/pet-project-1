import Image from 'next/image';

type PopularProductsSectionContentItemImageContainerProps = {
    imgRef: string;
    alt: string;
};

export const PopularProductsSectionContentItemImageContainer = ({
    imgRef,
    alt,
}: PopularProductsSectionContentItemImageContainerProps) => {
    return (
        <div className="px-el-5xl md:px-el-6xl xl:px-el-7xl">
            <div className="relative w-el-md h-el-md md:w-el-lg md:h-el-lg">
                <Image src={imgRef} alt={alt} fill />
            </div>
        </div>
    );
};
