import Image from 'next/image';

type SpecialPackageSectionContentElementImageProps = {
    alt: string;
    imageSrc: string;
};

export const SpecialPackageSectionContentHighlightedElementImage = ({
    alt,
    imageSrc,
}: SpecialPackageSectionContentElementImageProps) => {
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
            <div className="hidden md:block relative rounded-md xl:hidden h-slider-xl w-special-package-el-sm">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="rounded-md"
                    objectFit="cover"
                />
            </div>
            <div className="hidden xl:block relative rounded-md h-slider-xl w-special-package-sm">
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
