import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';

type SpecialPackageSectionContentItemDetailsProps = {
    name: string;
    price: number;
};

export const SpecialPackageSectionContentHighlightedItemDetails = ({
    name,
    price,
}: SpecialPackageSectionContentItemDetailsProps) => {
    const specialPackageSectionContentMainItemDetailsRatingIconSmList =
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
            <div className="flex gap-sm">
                {specialPackageSectionContentMainItemDetailsRatingIconSmList}
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
