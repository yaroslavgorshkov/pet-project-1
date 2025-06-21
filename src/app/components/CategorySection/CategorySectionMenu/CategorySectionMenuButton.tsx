import { Button } from '../../Button/Button';
import { EndIconType } from '../../types';
import { ButtonProps } from '../../Button/buttonTypes';
import { Text } from '../../Text/Text';

export const CategorySectionMenuButton = () => {
    const handleCategorySectionMenuButtonClick = () => {
        // TODO: add CategorySectionMenuButton click function
    };

    const categorySectionMenuButtonEndIcon: EndIconType = {
        iconType: 'arrow-right',
        iconFillColor: 'absolute-white',
        iconSize: '2xl',
    };

    const categorySectionMenuButtonLgProps: Omit<ButtonProps, 'children'> = {
        buttonSize: 'lg',
        borderRadius: 'md',
        variant: 'contained',
        backgroundColor: 'mint',
        onClick: handleCategorySectionMenuButtonClick,
        endIcon: categorySectionMenuButtonEndIcon,
    };

    return (
        <Button {...categorySectionMenuButtonLgProps}>
            <Text
                fontSize={'lg'}
                fontFamily={'opensans'}
                color={'white'}
                content={'All Categories'}
                fontWeight={'bold'}
            />
        </Button>
    );
};
