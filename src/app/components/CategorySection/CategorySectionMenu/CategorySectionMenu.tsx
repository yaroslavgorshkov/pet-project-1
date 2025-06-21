import { CategorySectionMenuButton } from './CategorySectionMenuButton';
import { CategorySectionMenuHamburgerButton } from './CategorySectionMenuHamburgerButton';
import { CategorySectionMenuNavigationList } from './CategorySectionMenuNavigationList/CategorySectionMenuNavigationList';
import { CategorySectionMenuSearch } from './CategorySectionMenuSearch';

export const CategorySectionMenu = () => {
    return (
        <>
            <div className="flex gap-3xl w-full md:hidden">
                <CategorySectionMenuSearch />
                <CategorySectionMenuHamburgerButton />
            </div>
            <div className="hidden flex-col gap-3xl items-center md:flex xl:items-start xl:gap-11xl">
                <CategorySectionMenuSearch />
                <CategorySectionMenuNavigationList />
                <CategorySectionMenuButton />
            </div>
        </>
    );
};
