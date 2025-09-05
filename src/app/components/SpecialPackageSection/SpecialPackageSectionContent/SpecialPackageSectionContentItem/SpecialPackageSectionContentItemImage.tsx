import Image from 'next/image';

type SpecialPackageSectionContentItemImageProps = {
    alt: string;
    imageSrc: string;
};

export const SpecialPackageSectionContentItemImage = ({
    alt,
    imageSrc,
}: SpecialPackageSectionContentItemImageProps) => {
    return (
        <>
            <div className="relative rounded-2xl h-el-lg w-responsive-viewport-sm md:hidden">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="rounded-2xl"
                    objectFit="cover"
                />
            </div>
            <div className="hidden md:block relative rounded-md h-slider-xl w-special-package-el-sm 2xl:h-special-package-el-sm 2xl:w-special-package-el-sm">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="rounded-md"
                    objectFit="cover"
                />
            </div>
        </>
    );
};
