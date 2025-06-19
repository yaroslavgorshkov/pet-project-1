import { CategorySectionMenu } from "../CategorySectionMenu/CategorySectionMenu";
import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionContentItem } from "./CategorySectionContentItem/CategorySectionContentItem";

export const CategorySectionContentDesktop = () => {
    const content = categorySectionContent;

    const categorySectionContentList = content.map(({ id, text, href, imgRef, alt }) => {
        const isFirstItem = id === 0;
        return (<CategorySectionContentItem
            key={id}
            text={text}
            href={href}
            isHighlighted={isFirstItem}
            imgRef={imgRef}
            alt={alt} />)
    })

    return (
        <div className="hidden gap-10xl w-full xl:flex">
            <CategorySectionMenu />
            <div className="grid grid-cols-2 gap-xl w-full">
                {categorySectionContentList}
            </div>
        </div>
    )
}