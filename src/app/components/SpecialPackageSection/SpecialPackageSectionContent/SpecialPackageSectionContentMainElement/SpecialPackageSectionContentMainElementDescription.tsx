import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';
import { SpecialPackageSectionContentElementDescription } from '../SpecialPackageSectionContentElement/SpecialPackageSectionContentElementDescription';

type SpecialPackageSectionContentMainElementDescriptionProps = {
    description: string;
};

export const SpecialPackageSectionContentMainElementDescription = ({
    description,
}: SpecialPackageSectionContentMainElementDescriptionProps) => {
    const specialPackageSectionContentMainElementDescriptionButtonEndIconProps: EndIconType =
        {
            iconType: 'see-more',
            iconFillColor: 'black',
            iconSize: 'lg',
        };

    const specialPackageSectionContentMainElementDescriptionButtonXlProps: Omit<
        ButtonProps,
        'children'
    > = {
        variant: 'secondary',
        endIcon:
            specialPackageSectionContentMainElementDescriptionButtonEndIconProps,
    };

    return (
        <>
            <div className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentElementDescription
                    description={description}
                />
            </div>
            <div className="hidden md:flex 2xl:hidden flex-col gap-2xl">
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
                    content={description}
                />
            </div>
            <div className="hidden 2xl:flex flex-col gap-lg">
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
                    content={description}
                />
                <div className="self-start">
                    <Button
                        {...specialPackageSectionContentMainElementDescriptionButtonXlProps}
                    >
                        <Text
                            fontSize={'lg'}
                            fontFamily={'opensans'}
                            color={'absolute-black'}
                            content={'See More'}
                            fontWeight={'bold'}
                        />
                    </Button>
                </div>
            </div>
        </>
    );
};
