import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header = () => {
    return (
        <header className="fixed w-full z-[100]">
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )
};
