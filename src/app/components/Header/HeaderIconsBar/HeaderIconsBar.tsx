import { HeaderIconsBarAccount } from "./HeaderIconsBarAccount/HeaderIconsBarAccount"
import { HeaderIconsBarSearch } from "./HeaderIconsBarSearch/HeaderIconsBarSearch"
import { HeaderIconsBarShoppingCart } from "./HeaderIconsBarShoppingCart"


export const HeaderIconsBar = () => {

    return (
        <div className="gap-3 flex order-2 items-center md:gap-[58px]">
            <HeaderIconsBarSearch />
            <HeaderIconsBarShoppingCart />
            <HeaderIconsBarAccount />
        </div>
    )
}