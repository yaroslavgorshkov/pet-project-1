import { CategorySectionContentDesktop } from "./CategorySectionContentDesktop"
import { CategorySectionContentMobile } from "./CategorySectionContentMobile"
import { CategorySectionContentTablet } from "./CategorySectionContentTablet"

export const CategorySectionContent = () => {
    return (
        <>
            <CategorySectionContentMobile />
            <CategorySectionContentTablet />
            <CategorySectionContentDesktop />
        </>
    )
}