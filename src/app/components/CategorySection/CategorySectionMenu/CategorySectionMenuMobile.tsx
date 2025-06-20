import { CategorySectionMenuHamburgerButton } from './CategorySectionMenuHamburger/CategorySectionMenuHamburgerButton';
// import { CategorySectionMenuHamburgerMenuContent } from "./CategorySectionMenuHamburger/CategorySectionMenuHamburgerMenuContent"
import { CategorySectionMenuSearch } from './CategorySectionMenuSearch';

export const CategorySectionMenuMobile = () => {
    return (
        <div className="flex flex-col gap-3xl w-full md:hidden">
            <div className="flex gap-3xl">
                <CategorySectionMenuSearch />
                <CategorySectionMenuHamburgerButton />
            </div>
            {/* <CategorySectionMenuHamburgerMenuContent /> */}
        </div>
    );
};
