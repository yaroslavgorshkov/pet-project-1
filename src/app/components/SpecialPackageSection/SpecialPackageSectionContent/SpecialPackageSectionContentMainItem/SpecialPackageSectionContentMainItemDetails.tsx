import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';
import { SpecialPackageSectionContentItemDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentItem/SpecialPackageSectionContentItemDetails';

type SpecialPackageSectionContentMainItemDetailsProps = {
    name: string;
    price: number;
};

export const SpecialPackageSectionContentMainItemDetails = ({
    name,
    price,
}: SpecialPackageSectionContentMainItemDetailsProps) => {
    const specialPackageSectionContentMainItemDetailsRatingIconXlList =
        getRatingComponentList('10xl');

    const specialPackageSectionContentMainItemDetailsRatingIconMdList =
        getRatingComponentList('6xl');

    const priceContent = `$${price}`;

    return (
        <div className="flex flex-col gap-md">
            <div className="md:hidden">
                <SpecialPackageSectionContentItemDetails
                    name={name}
                    price={price}
                />
            </div>
            <div className="hidden md:block">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={'Larkin Wood Full Set'}
                />
            </div>
            <div className="hidden gap-sm md:flex 2xl:hidden">
                {specialPackageSectionContentMainItemDetailsRatingIconMdList}
            </div>
            <div className="gap-md hidden 2xl:flex">
                {specialPackageSectionContentMainItemDetailsRatingIconXlList}
            </div>
            <div className="hidden md:block">
                <Text
                    fontSize={'4xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={priceContent}
                    fontWeight={'bold'}
                />
            </div>
        </div>
    );
};
