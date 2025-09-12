import { Text } from '@/core/Text/Text';
import { getRatingComponentList } from '@/SpecialPackageSection/helpers/getRatingComponentList';
import { Rating } from '../specialPackageSectionMockData';

type SpecialPackageSectionContentItemDetailsProps = {
    name: string;
    price: number;
    rating: Rating;
};

export const SpecialPackageSectionContentHighlightedItemDetails = ({
    name,
    price,
    rating,
}: SpecialPackageSectionContentItemDetailsProps) => {
    const specialPackageSectionContentMainItemDetailsRatingIconSmList =
        getRatingComponentList('6xl', rating);

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
