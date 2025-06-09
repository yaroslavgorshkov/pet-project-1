import { CategorySectionContentDesktop } from "./CategorySectionContentDesktop"
import { CategorySectionContentMobile } from "./CategorySectionContentMobile"
import { CategorySectionContentTablet } from "./CategorySectionContentTablet"
import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData"

export const CategorySectionContent = () => {
    const content = categorySectionContent;
    if (!content || content.length === 0) {
        return
    }

    return (
        <>
            <CategorySectionContentMobile />
            <CategorySectionContentTablet />
            <CategorySectionContentDesktop />
        </>
    )
}