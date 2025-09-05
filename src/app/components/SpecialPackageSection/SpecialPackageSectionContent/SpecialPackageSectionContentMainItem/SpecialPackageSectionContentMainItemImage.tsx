import { IconButton } from '@/core/Button/IconButton';
import Image from 'next/image';

type SpecialPackageSectionContentMainItemImageProps = {
    alt: string;
    imageSrc: string;
};

export const SpecialPackageSectionContentMainItemImage = ({
    alt,
    imageSrc,
}: SpecialPackageSectionContentMainItemImageProps) => {
    return (
        <>
            <div className="relative rounded-2xl h-el-lg md:hidden w-responsive-viewport-sm">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="rounded-2xl"
                    objectFit="cover"
                />
            </div>
            <div className="hidden w-full xl:max-w-2xl 2xl:max-w-none relative h-el-2xl md:block 2xl:h-el-3xl">
                <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="rounded-xl 2xl:rounded-md"
                    objectFit="cover"
                />
                <div className="flex items-center justify-center w-el-sm h-el-sm rounded-xl 2xl:rounded-md bg-lapis absolute bottom-0 right-0">
                    <IconButton
                        iconType={'zoom-out'}
                        iconFillColor={'white'}
                        iconSize={'xl'}
                    />
                </div>
            </div>
        </>
    );
};
