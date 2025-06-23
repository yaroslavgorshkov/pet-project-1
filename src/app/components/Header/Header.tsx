import { HeaderNavigationList } from './HeaderNavigaionList/HeaderNavigationList';
import { HeaderIconsBar } from './HeaderIconsBar/HeaderIconsBar';
import { HeaderLogo } from './HeaderLogo';
import { HeaderHamburgerMenuButton } from './HeaderHamburgerMenuButton';

export const Header = () => {
    return (
        <header className="fixed w-full z-50">
            <div className="flex px-section-sm py-section-lg backdrop-blur-md bg-header shadow-lg justify-between md:px-section-md lg:px-section-xl xl:hidden">
                <HeaderHamburgerMenuButton />
                <HeaderLogo />
                <HeaderIconsBar />
            </div>
            <div className="hidden px-section-7xl py-section-lg backdrop-blur-md bg-header shadow-lg justify-between xl:flex">
                <HeaderLogo />
                <HeaderNavigationList />
                <HeaderIconsBar />
            </div>
        </header>
    );
};
