import { categorySectionContent } from "../CategorySectionMenu/mockCategorySectionData";
import { CategorySectionContentItem } from "./CategorySectionContentItem/CategorySectionContentItem";

export const CategorySectionContentTablet = () => {
    const content = categorySectionContent;

    const categorySectionContentList = content.map(item => {
        if (item.id === 0) {
            return <CategorySectionContentItem
                key={item.id}
                text={item.text}
                ref={item.ref}
                isHighlighted={true}
                imgRef={item.imgRef}
                alt={item.alt} />
        } else {
            return <CategorySectionContentItem
                key={item.id}
                text={item.text}
                ref={item.ref}
                imgRef={item.imgRef}
                alt={item.alt} />
        }
    })

    return (
        <div className="hidden grid-cols-2 gap-[26px] w-full md:grid xl:hidden">
            {categorySectionContentList}
        </div>
    )
}