import { twMerge } from 'tailwind-merge';
import { Text } from '../../Text/Text';
import Image from 'next/image';

type PopularProductsSectionContentItemProps = {
    href: string;
    imgRef: string;
    name: string;
    description: string;
    price: number;
    backgroundColor: string;
    alt: string;
};

export const PopularProductsSectionContentItem = ({
    href,
    imgRef,
    name,
    description,
    price,
    backgroundColor,
    alt,
}: PopularProductsSectionContentItemProps) => {
    const combinedClassName = twMerge(
        'flex flex-col gap-3xl px-el-md pt-el-5xl pb-el-md rounded-lg md:pt-el-8xl md:px-el-3xl md:pb-el-6xl',
        backgroundColor
    );
    const popularProductsSectionContentItemPrice = `$${price}`;

    return (
        <a href={href} className={combinedClassName}>
            <div className="px-el-5xl md:px-el-6xl xl:px-el-7xl">
                <div className="relative w-el-md h-el-md md:w-el-lg md:h-el-lg">
                    <Image src={imgRef} alt={alt} fill />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="md:hidden">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={name}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="hidden md:block">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={name}
                        fontWeight={'bold'}
                    />
                </div>
                <div className="mt-4 md:mt-6">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={description}
                    />
                </div>
                <div className="mt-5 md:mt-6">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'mint'}
                        content={popularProductsSectionContentItemPrice}
                        fontWeight={'bold'}
                    />
                </div>
            </div>
        </a>
    );
};
