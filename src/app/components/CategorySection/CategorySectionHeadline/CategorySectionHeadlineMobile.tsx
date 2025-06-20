import { CategorySectionHeadlineTitle } from './CategorySectionHeadlineTitle';
import { CategorySectionMenu } from '../CategorySectionMenu/CategorySectionMenu';
import { categorySectionContent } from '../categorySectionMockData';
import { CategorySectionContentFallback } from '../CategorySectionContent/CategorySectionContentFallback';

export const CategorySectionHeadlineMobile = () => {
    const content = categorySectionContent;
    const isCategorySectionContentEmpty = !content || content.length === 0;
    if (isCategorySectionContentEmpty) {
        return (
            <div className="flex flex-col gap-3xl items-center w-full md:max-w-xl xl:hidden">
                <CategorySectionHeadlineTitle />
                <CategorySectionContentFallback />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3xl items-center w-full md:max-w-xl xl:hidden">
            <CategorySectionHeadlineTitle />
            <CategorySectionMenu />
        </div>
    );
};
