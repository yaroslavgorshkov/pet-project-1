import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';
import { SpecialPackageSectionContentElementButton } from '../SpecialPackageSectionContentElement/SpecialPackageSectionContentElementButton';

export const SpecialPackageSectionContentMainElementButton = () => {
    const handleSpecialPackageSectionContentMainElementButtonClick = () => [
        // TODO: make handleSpecialPackageSectionContentMainElementButtonClick logic
    ];

    const specialPackageSectionContentMainElementButtonIconSm: EndIconType = {
        iconType: 'shopping-cart',
        iconFillColor: 'white',
        iconSize: '2xl',
    };

    const specialPackageSectionContentMainElementButtonIconXl: EndIconType = {
        iconType: 'shopping-cart',
        iconFillColor: 'white',
        iconSize: '5xl',
    };

    const specialPackageSectionContentMainElementButtonSmProps: Omit<
        ButtonProps,
        'children'
    > = {
        buttonSize: 'sm',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: specialPackageSectionContentMainElementButtonIconSm,
        onClick: handleSpecialPackageSectionContentMainElementButtonClick,
    };

    const specialPackageSectionContentMainElementButtonXlProps: Omit<
        ButtonProps,
        'children'
    > = {
        buttonSize: 'md',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: specialPackageSectionContentMainElementButtonIconXl,
        onClick: handleSpecialPackageSectionContentMainElementButtonClick,
    };

    return (
        <>
            <div className="md:hidden">
                <SpecialPackageSectionContentElementButton />
            </div>
            <div className="hidden md:block 2xl:hidden">
                <Button
                    {...specialPackageSectionContentMainElementButtonSmProps}
                >
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
            </div>
            <div className="hidden 2xl:block">
                <Button
                    {...specialPackageSectionContentMainElementButtonXlProps}
                >
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
            </div>
        </>
    );
};
