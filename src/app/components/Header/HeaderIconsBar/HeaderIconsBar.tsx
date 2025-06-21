import { HeaderIconsBarAccountButton } from './HeaderIconsBarAccountButton';
import { HeaderIconsBarSearchButton } from './HeaderIconsBarSearchButton';
import { HeaderIconsBarShoppingCartButton } from './HeaderIconsBarShoppingCartButton';

export const HeaderIconsBar = () => {
    return (
        <div className="gap-md flex order-2 items-center md:gap-9xl">
            <HeaderIconsBarSearchButton />
            <HeaderIconsBarShoppingCartButton />
            <HeaderIconsBarAccountButton />
        </div>
    );
};
