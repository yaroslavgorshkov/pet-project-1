import { CategorySectionMenuHamburgerButton } from "./CategorySectionMenuHamburger/CategorySectionMenuHamburgerButton"
// import { CategorySectionMenuHamburgerMenuContent } from "./CategorySectionMenuHamburger/CategorySectionMenuHamburgerMenuContent"
import { CategorySectionMenuSearch } from "./CategorySectionMenuSearch"

export const CategorySectionMenuMobile = () => {
    return (
        <div className="flex flex-col gap-9 w-full md:hidden">
            <div className="flex gap-9">
                <CategorySectionMenuSearch />
                <CategorySectionMenuHamburgerButton />
            </div>
            {/* <CategorySectionMenuHamburgerMenuContent /> */}
        </div>
    )
}