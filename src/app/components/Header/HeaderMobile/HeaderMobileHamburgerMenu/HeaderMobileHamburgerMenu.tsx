import { useState } from 'react';
import { navigationListContent } from '../../headerMockData';
import { HeaderMobileHamburgerMenuButton } from './HeaderMobileHamburgerMenuButton';

export const HeaderMobileHamburgerMenu = () => {
    const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);
    const hamburgerMenuNavigationListContent = navigationListContent;

    function handleBurgerMenuClick() {
        setIsBurgerMenuVisible((prev) => !prev);
    }

    return (
        <div className="relative md:order-1">
            <HeaderMobileHamburgerMenuButton
                handleClick={handleBurgerMenuClick}
            />
        </div>
    );
};
