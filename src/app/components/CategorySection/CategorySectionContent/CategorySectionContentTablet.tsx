import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionContentItem } from "./CategorySectionContentItem/CategorySectionContentItem";

export const CategorySectionContentTablet = () => {
    const content = categorySectionContent;

    const categorySectionContentList = content.map(({ id, text, href, imgRef, alt }) => {
        const isFirstItem = id === 0;
        return <CategorySectionContentItem
            key={id}
            text={text}
            href={href}
            isHighlighted={isFirstItem}
            imgRef={imgRef}
            alt={alt} />
    })

    return (
        <div className="hidden grid-cols-2 gap-[26px] w-full md:grid xl:hidden">
            {categorySectionContentList}
        </div>
    )
}