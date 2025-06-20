import { NavigationList } from "@/app/components/NavigationList/NavigationList";
import { categorySectionMenuNavigationListContent } from "../../categorySectionMockData";
import { CategorySectionMenuNavigationListDesktopSliderArrowsWrapper } from "./CategorySectionMenuNavigationListDesktopSliderArrowsWrapper/CategorySectionMenuNavigationListDesktopSliderArrowsWrapper";
import { CategorySectionMenuNavigationListItem } from "./CategorySectionMenuNavigationListItem";

export const CategorySectionMenuNavigationListDesktop = () => {
    return (
        <div className="hidden w-full xl:flex">
            <NavigationList
                renderListItem={({ href, text, isHighlighted }) =>
                    <CategorySectionMenuNavigationListItem text={text} href={href} isHighlighted={isHighlighted} />}
                navigationListContent={categorySectionMenuNavigationListContent}
                highlightedElementNumber={0}
                ulClassName="category-section__menu-navigation-list-desktop flex flex-col gap-11xl max-h-sm overflow-scroll pl-el-lg"
                navClassName="w-full" />
            <CategorySectionMenuNavigationListDesktopSliderArrowsWrapper />
        </div>
    )
}