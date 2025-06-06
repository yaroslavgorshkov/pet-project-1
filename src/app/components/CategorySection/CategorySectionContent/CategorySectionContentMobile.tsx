import { categorySectionContent } from "../CategorySectionMenu/categorySectionMockData";
import { CategorySectionContentItem } from "./CategorySectionContentItem/CategorySectionContentItem";

export const CategorySectionContentMobile = () => {
    const content = categorySectionContent;

    const categorySectionContentList = content.map(item => {
        if (item.id === 0) {
            return <CategorySectionContentItem
                key={item.id}
                text={item.text}
                href={item.ref}
                isHighlighted={true}
                imgRef={item.imgRef}
                alt={item.alt} />
        } else {
            return <CategorySectionContentItem
                key={item.id}
                text={item.text}
                href={item.ref}
                imgRef={item.imgRef}
                alt={item.alt} />
        }
    })

    return (
        <div className="flex flex-col gap-[26px] w-full md:hidden">
            {categorySectionContentList}
        </div>
    )
}