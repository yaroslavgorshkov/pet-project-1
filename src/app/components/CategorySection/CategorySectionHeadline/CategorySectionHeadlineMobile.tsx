import { CategorySectionHeadlineTitle } from "./CategorySectionHeadlineTitle"
import { CategorySectionMenu } from "../CategorySectionMenu/CategorySectionMenu"
import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionContentFallback } from "../CategorySectionContent/CategorySectionContentFallback";

export const CategorySectionHeadlineMobile = () => {
    const content = categorySectionContent;
    const isCategorySectionContentEmpty = !content || content.length === 0;
    if (isCategorySectionContentEmpty) {
        return (
            <div className="flex flex-col gap-9 items-center w-full md:max-w-[791px] xl:hidden">
                <CategorySectionHeadlineTitle />
                <CategorySectionContentFallback />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-9 items-center w-full md:max-w-[791px] xl:hidden">
            <CategorySectionHeadlineTitle />
            <CategorySectionMenu />
        </div>
    )
}