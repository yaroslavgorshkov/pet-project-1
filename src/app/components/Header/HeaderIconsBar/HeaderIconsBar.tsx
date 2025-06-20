import { HeaderIconsBarAccount } from './HeaderIconsBarAccount/HeaderIconsBarAccount';
import { HeaderIconsBarSearch } from './HeaderIconsBarSearch/HeaderIconsBarSearch';
import { HeaderIconsBarShoppingCart } from './HeaderIconsBarShoppingCart';

export const HeaderIconsBar = () => {
    return (
        <div className="gap-md flex order-2 items-center md:gap-9xl">
            <HeaderIconsBarSearch />
            <HeaderIconsBarShoppingCart />
            <HeaderIconsBarAccount />
        </div>
    );
};
