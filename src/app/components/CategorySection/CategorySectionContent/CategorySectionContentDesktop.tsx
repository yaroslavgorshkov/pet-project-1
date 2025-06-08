import { CategorySectionMenu } from "../CategorySectionMenu/CategorySectionMenu";
import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionContentItem } from "./CategorySectionContentItem/CategorySectionContentItem";

export const CategorySectionContentDesktop = () => {
    const content = categorySectionContent;

    const categorySectionContentList = content.map(({ id, text, href, imgRef, alt }) =>
    (<CategorySectionContentItem
        key={id}
        text={text}
        href={href}
        isHighlighted={id === 0}
        imgRef={imgRef}
        alt={alt} />)
    )

    return (
        <div className="hidden gap-[60px] w-full xl:flex">
            <CategorySectionMenu />
            <div className="grid grid-cols-2 gap-[26px] w-full">
                {categorySectionContentList}
            </div>
        </div>
    )
}