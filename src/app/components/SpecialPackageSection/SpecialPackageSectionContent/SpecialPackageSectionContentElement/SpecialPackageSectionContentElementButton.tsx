import { Button } from '@/core/Button/Button';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Text } from '@/core/Text/Text';
import { EndIconType } from '@/types';

export const SpecialPackageSectionContentElementButton = () => {
    const handleSpecialPackageSectionContentElementButtonClick = () => {
        // TODO: make handleSpecialPackageSectionContentElementButtonClick logic
    };

    const specialPackageSectionContentMainItemButtonIconSm: EndIconType = {
        iconType: 'shopping-cart',
        iconFillColor: 'white',
        iconSize: '2xl',
    };

    const specialPackageSectionContentMainItemButtonIconMd: EndIconType = {
        iconType: 'see-more',
        iconFillColor: 'lapis',
        iconSize: 'lg',
    };

    const specialPackageSectionContentMainItemButtonSmProps: Omit<
        ButtonProps,
        'children'
    > = {
        buttonSize: 'sm',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: specialPackageSectionContentMainItemButtonIconSm,
        onClick: handleSpecialPackageSectionContentElementButtonClick,
    };

    const specialPackageSectionContentMainItemButtonMdProps: Omit<
        ButtonProps,
        'children'
    > = {
        variant: 'secondary',
        endIcon: specialPackageSectionContentMainItemButtonIconMd,
        onClick: handleSpecialPackageSectionContentElementButtonClick,
    };

    return (
        <>
            <div className="md:hidden">
                <Button {...specialPackageSectionContentMainItemButtonSmProps}>
                    <Text
                        fontSize={'md'}
                        fontFamily={'opensans'}
                        color={'white'}
                        content={'Add to cart'}
                    />
                </Button>
            </div>
            <div className="hidden md:block">
                <Button {...specialPackageSectionContentMainItemButtonMdProps}>
                    <Text
                        fontSize={'sm'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'See More'}
                        fontWeight={'bold'}
                    />
                </Button>
            </div>
        </>
    );
};
