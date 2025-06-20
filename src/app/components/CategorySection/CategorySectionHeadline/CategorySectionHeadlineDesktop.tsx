import { CategorySectionContentFallback } from "../CategorySectionContent/CategorySectionContentFallback";
import { categorySectionContent } from "../categorySectionMockData";
import { CategorySectionHeadlineTitle } from "./CategorySectionHeadlineTitle"

export const CategorySectionHeadlineDesktop = () => {
    const content = categorySectionContent;
    const isCategorySectionContentEmpty = !content || content.length === 0;
    if (isCategorySectionContentEmpty) {
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