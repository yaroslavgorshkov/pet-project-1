import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';
import { SpecialPackageSectionContentElementDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentElement/SpecialPackageSectionContentElementDetails';

type SpecialPackageSectionContentMainElementDetailsProps = {
    name: string;
    price: number;
};

export const SpecialPackageSectionContentMainElementDetails = ({
    name,
    price,
}: SpecialPackageSectionContentMainElementDetailsProps) => {
    const specialPackageSectionContentMainElementDetailsRatingIconXlList =
        getRatingComponentList('10xl');

    const specialPackageSectionContentMainElementDetailsRatingIconMdList =
        getRatingComponentList('6xl');

    const priceContent = `$${price}`;

    return (
        <div className="flex flex-col gap-md">
            <div className="md:hidden">
                <SpecialPackageSectionContentElementDetails
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
                {specialPackageSectionContentMainElementDetailsRatingIconMdList}
            </div>
            <div className="gap-md hidden 2xl:flex">
                {specialPackageSectionContentMainElementDetailsRatingIconXlList}
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
