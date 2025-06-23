import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/buttonTypes';
import { EndIconType } from '../types';
import { Text } from '../Text/Text';

export const PopularProductsSectionButton = () => {
    const handlePopularProductsSectionButtonClick = () => {
        // TODO: add PopularProductsSectionButton click function
    };

    const popularProductsSectionButtonIcon: EndIconType = {
        iconType: 'arrow-right',
        iconFillColor: 'absolute-white',
        iconSize: '2xl',
    };

    const popularProductsSectionButtonProps: Omit<ButtonProps, 'children'> = {
        buttonSize: 'lg',
        variant: 'contained',
        backgroundColor: 'mint',
        borderRadius: 'md',
        endIcon: popularProductsSectionButtonIcon,
        onClick: handlePopularProductsSectionButtonClick,
    };

    return (
        <a href="#popular-products-section-explore-more-items">
            <Button {...popularProductsSectionButtonProps}>
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'white'}
                    fontWeight={'bold'}
                    content={'Explore all items'}
                />
            </Button>
        </a>
    );
};
