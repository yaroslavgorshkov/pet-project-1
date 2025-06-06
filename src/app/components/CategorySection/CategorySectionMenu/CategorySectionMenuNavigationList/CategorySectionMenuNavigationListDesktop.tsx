import { categorySectionMenuNavigationListContent } from "../categorySectionMockData";
import { CategorySectionMenuNavigationListDesktopSliderArrowsWrapper } from "./CategorySectionMenuNavigationListDesktopSliderArrowsWrapper/CategorySectionMenuNavigationListDesktopSliderArrowsWrapper";
import { CategorySectionMenuNavigationListItem } from "./CategorySectionMenuNavigationListItem";

export const CategorySectionMenuNavigationListDesktop = () => {
    const navigationListContent = categorySectionMenuNavigationListContent;

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
        <div className="hidden w-full xl:flex">
            <nav className="w-full">
                <ul className="category-section__menu-navigation-list-desktop flex flex-col gap-[78px] h-[694px] overflow-scroll pl-6">
                    {categorySectionMenuNavigationList}
                </ul>
            </nav>
            <CategorySectionMenuNavigationListDesktopSliderArrowsWrapper />
        </div>
    )
}