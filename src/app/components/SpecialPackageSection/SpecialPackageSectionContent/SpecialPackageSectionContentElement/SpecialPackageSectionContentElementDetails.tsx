import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';

type SpecialPackageSectionContentElementDetailsProps = {
    name: string;
    price: number;
};

export const SpecialPackageSectionContentElementDetails = ({
    name,
    price,
}: SpecialPackageSectionContentElementDetailsProps) => {
    const specialPackageSectionContentMainElementDetailsRatingIconSmList =
        getRatingComponentList('6xl');

    const priceContent = `$${price}`;

    return (
        <div className="flex flex-col gap-md">
            <Text
                fontSize={'3xl'}
                fontFamily={'opensans'}
                color={'lapis'}
                content={name}
            />
            <div className="flex gap-sm md:hidden">
                {specialPackageSectionContentMainElementDetailsRatingIconSmList}
            </div>
            <Text
                fontSize={'4xl'}
                fontFamily={'opensans'}
                color={'lapis'}
                content={priceContent}
                fontWeight={'bold'}
            />
        </div>
    );
};
