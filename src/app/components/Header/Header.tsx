import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header = () => {
    return (
        <header className="fixed w-full z-50">
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )
};
