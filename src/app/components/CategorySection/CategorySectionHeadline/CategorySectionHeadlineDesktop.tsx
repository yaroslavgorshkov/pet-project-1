import { CategorySectionContentFallback } from "../CategorySectionContent/CategorySectionContentFallback";
import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionHeadlineTitle } from "./CategorySectionHeadlineTitle"

export const CategorySectionHeadlineDesktop = () => {
    const content = categorySectionContent;
    if (!content || content.length === 0) {
        return (
            <div className="hidden xl:block">
                <CategorySectionHeadlineTitle />
                <CategorySectionContentFallback />
            </div>
        )
    }

    return (
        <div className="hidden xl:block">
            <CategorySectionHeadlineTitle />
        </div>
    )
}