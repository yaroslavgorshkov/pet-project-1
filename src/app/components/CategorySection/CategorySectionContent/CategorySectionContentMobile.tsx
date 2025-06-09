import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionContentItem } from "./CategorySectionContentItem/CategorySectionContentItem";

export const CategorySectionContentMobile = () => {
    const content = categorySectionContent;

    const categorySectionContentList = content.map(({ id, text, href, imgRef, alt }) => {
        const isFirstItem = id === 0;
        return (<CategorySectionContentItem
            key={id}
            text={text}
            href={href}
            isHighlighted={isFirstItem}
            imgRef={imgRef}
            alt={alt} />
        )
    })

    return (
        <div className="flex flex-col gap-[26px] w-full md:hidden">
            {categorySectionContentList}
        </div>
    )
}