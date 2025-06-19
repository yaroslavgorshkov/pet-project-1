import { CategorySectionMenuButton } from "./CategorySectionMenuButton"
import { CategorySectionMenuNavigationList } from "./CategorySectionMenuNavigationList/CategorySectionMenuNavigationList"
import { CategorySectionMenuSearch } from "./CategorySectionMenuSearch"

export const CategorySectionMenuTablet = () => {
    return (
        <div className="hidden flex-col gap-3xl items-center md:flex xl:items-start xl:gap-11xl">
            <CategorySectionMenuSearch />
            <CategorySectionMenuNavigationList />
            <CategorySectionMenuButton />
            {/* <CategorySectionMenuAllCategories /> */}
        </div>
    )
}