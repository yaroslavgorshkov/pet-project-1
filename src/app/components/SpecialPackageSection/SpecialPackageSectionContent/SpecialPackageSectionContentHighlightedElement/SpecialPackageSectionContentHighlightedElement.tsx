import { specialPackageSectionHighlightedElementMockData } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { SpecialPackageSectionContentHighlightedElementImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedElement/SpecialPackageSectionContentHighlightedElementImage';
import { SpecialPackageSectionContentHighlightedElementButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedElement/SpecialPackageSectionContentHighlightedElementButton';
import { SpecialPackageSectionContentHighlightedElementDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedElement/SpecialPackageSectionContentHighlightedElementDetails';
import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';

export const SpecialPackageSectionContentHighlightedElement = () => {
    const { alt, href, imageSrc, name, price } =
        specialPackageSectionHighlightedElementMockData;

    const priceText = `$${price}`;

    const specialPackageSectionContentHighlightedElementRatingList =
        getRatingComponentList('xl');

    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentHighlightedElementDetails
                    name={name}
                    price={price}
                />
                <SpecialPackageSectionContentHighlightedElementButton />
                <SpecialPackageSectionContentHighlightedElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col gap-2xl">
                    <Text
                        fontSize={'3xl'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'Description'}
                        fontWeight={'bold'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                </div>
            </article>
            <article className="hidden md:flex gap-sm">
                <SpecialPackageSectionContentHighlightedElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col gap-lg bg-lite-green rounded-md justify-center w-el-2xl 2xl:w-special-package-el-md relative px-el-md">
                    <div className="flex justify-between">
                        <Text
                            fontSize={'2xl'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={name}
                        />
                        <Text
                            fontSize={'2xl'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={priceText}
                            fontWeight={'bold'}
                        />
                    </div>
                    <div className="flex gap-sm">
                        {
                            specialPackageSectionContentHighlightedElementRatingList
                        }
                    </div>
                    <a href={href} className="underline">
                        <Text
                            fontSize={'md'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={'See details'}
                        />
                    </a>
                    <div className="absolute bottom-0 right-0">
                        <SpecialPackageSectionContentHighlightedElementButton />
                    </div>
                </div>
            </article>
        </>
    );
};
