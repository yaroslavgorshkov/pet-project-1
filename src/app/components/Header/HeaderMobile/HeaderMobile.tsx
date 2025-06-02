import { HeaderIconsBar } from "../HeaderIconsBar/HeaderIconsBar";
import { HeaderLogo } from "../HeaderLogo";
import { HeaderMobileHamburgerMenu } from "./HeaderMobileHamburgerMenu/HeaderMobileHamburgerMenu";

export const HeaderMobile = () => {
    return (
        <div className="flex px-4 py-[26px] backdrop-blur-md bg-header shadow-lg justify-between md:px-5 lg:px-10 xl:hidden">
            <HeaderMobileHamburgerMenu />
            <HeaderLogo />
            <HeaderIconsBar />
        </div>
    );
};
