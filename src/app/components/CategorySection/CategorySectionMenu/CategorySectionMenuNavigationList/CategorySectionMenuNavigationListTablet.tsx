import { categorySectionMenuNavigationListContent } from "../categorySectionMockData";
import { CategorySectionMenuNavigationListItem } from "./CategorySectionMenuNavigationListItem";

export const CategorySectionMenuNavigationListTablet = () => {
    const navigationListContent = categorySectionMenuNavigationListContent.slice(0, 7);

    const categorySectionMenuNavigationList = navigationListContent.map(item => {
        if (item.id === 0) {
            return <CategorySectionMenuNavigationListItem
                key={item.id}
                text={item.text}
                href={item.ref}
                isHighlighted={true}
            />
        } else {
            return <CategorySectionMenuNavigationListItem
                key={item.id}
                text={item.text}
                href={item.ref}
            />
        }
    })

    return (
        <nav className="xl:hidden">
            <ul className="list-none m-0 p-0 flex flex-wrap gap-[44px] justify-center">
                {categorySectionMenuNavigationList}
            </ul>
        </nav>
    )
}