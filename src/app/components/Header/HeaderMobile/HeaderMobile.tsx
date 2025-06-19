import { HeaderIconsBar } from "../HeaderIconsBar/HeaderIconsBar";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileHamburgerMenu } from "./HeaderMobileHamburgerMenu/HeaderMobileHamburgerMenu";

export const HeaderMobile = () => {
    return (
        <div className="flex px-section-sm py-section-lg backdrop-blur-md bg-header shadow-lg justify-between md:px-section-md lg:px-section-xl xl:hidden">
            <HeaderMobileHamburgerMenu />
            <HeaderLogo />
            <HeaderIconsBar />
        </div>
    );
};
