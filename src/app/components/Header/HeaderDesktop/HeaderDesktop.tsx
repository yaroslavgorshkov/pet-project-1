import { HeaderIconsBar } from "../HeaderIconsBar/HeaderIconsBar"
import { HeaderLogo } from "../HeaderLogo"
import { HeaderDesktopNavigationList } from "./HeaderDesktopNavigaionList/HeaderDesktopNavigationList"

export const HeaderDesktop = () => {
    return (
        <div className="hidden px-[150px] py-[26px] backdrop-blur-md bg-header shadow-lg justify-between xl:flex">
            <HeaderLogo />
            <HeaderDesktopNavigationList />
            <HeaderIconsBar />
        </div>
    )
}