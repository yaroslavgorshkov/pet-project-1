import { CategorySectionMenuButton } from "./CategorySectionMenuButton"
import { CategorySectionMenuNavigationList } from "./CategorySectionMenuNavigationList/CategorySectionMenuNavigationList"
import { CategorySectionMenuSearch } from "./CategorySectionMenuSearch"

export const CategorySectionMenuTablet = () => {
    return (
        <div className="hidden flex-col gap-9 items-center md:flex xl:items-start xl:gap-20">
            <CategorySectionMenuSearch />
            <CategorySectionMenuNavigationList />
            <CategorySectionMenuButton />
            {/* <CategorySectionMenuAllCategories /> */}
        </div>
    )
}