import { SpecialPackageSectionContentElementDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentElement/SpecialPackageSectionContentElementDetails';
import { SpecialPackageSectionContentElementButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentElement/SpecialPackageSectionContentElementButton';
import { SpecialPackageSectionContentElementImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentElement/SpecialPackageSectionContentElementImage';
import { SpecialPackageSectionContentElementDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentElement/SpecialPackageSectionContentElementDescription';
import { SpecialPackageSectionMockDataType } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';

type SpecialPackageSectionContentElementProps = Omit<
    SpecialPackageSectionMockDataType,
    'id'
>;
export const SpecialPackageSectionContentElement = ({
    name,
    alt,
    description,
    imageSrc,
    price,
}: SpecialPackageSectionContentElementProps) => {
    const priceText = `$${price}`;

    const specialPackageSectionContentHighlightedElementRatingList =
        getRatingComponentList('xl');

    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentElementDetails
                    name={name}
                    price={price}
                />
                <SpecialPackageSectionContentElementButton />
                <SpecialPackageSectionContentElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <SpecialPackageSectionContentElementDescription
                    description={description}
                />
            </article>
            <article className="hidden md:flex gap-sm">
                <SpecialPackageSectionContentElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col gap-sm justify-center w-el-2xl 2xl:w-el-xl px-el-md">
                    <div className="flex justify-between">
                        <div className="2xl:hidden">
                            <Text
                                fontSize={'2xl'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={name}
                            />
                        </div>
                        <div className="hidden 2xl:block">
                            <Text
                                fontSize={'md'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={name}
                            />
                        </div>
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
                    <SpecialPackageSectionContentElementDescription
                        description={description}
                    />
                    <SpecialPackageSectionContentElementButton />
                </div>
            </article>
        </>
    );
};
