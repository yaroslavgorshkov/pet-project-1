import { CategorySectionMenuNavigationListDesktop } from './CategorySectionMenuNavigationListDesktop';
import { CategorySectionMenuNavigationListTablet } from './CategorySectionMenuNavigationListTablet';

export const CategorySectionMenuNavigationList = () => {
    return (
        <>
            <CategorySectionMenuNavigationListTablet />
            <CategorySectionMenuNavigationListDesktop />
        </>
    );
};
