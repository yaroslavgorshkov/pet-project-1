import { HeaderIconsBar } from "../HeaderIconsBar/HeaderIconsBar"
import { HeaderLogo } from "../HeaderLogo"
import { HeaderDesktopNavigationList } from "./HeaderDesktopNavigaionList/HeaderDesktopNavigationList"

export const HeaderDesktop = () => {
    return (
        <div className="hidden px-section-7xl py-section-lg backdrop-blur-md bg-header shadow-lg justify-between xl:flex">
            <HeaderLogo />
            <HeaderDesktopNavigationList />
            <HeaderIconsBar />
        </div>
    )
}