import { CategorySectionContentDesktop } from "./CategorySectionContentDesktop"
import { CategorySectionContentMobile } from "./CategorySectionContentMobile"
import { CategorySectionContentTablet } from "./CategorySectionContentTablet"
import { categorySectionContent } from "../categorySectionMockData"

export const CategorySectionContent = () => {
    const content = categorySectionContent;
    const isCategorySectionContentEmpty = !content || content.length === 0;
    if (isCategorySectionContentEmpty) {
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