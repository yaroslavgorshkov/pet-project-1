import { NavigationList } from "@/app/components/NavigationList/NavigationList";
import { categorySectionMenuNavigationListContent } from "../categorySectionMockData";
import { CategorySectionMenuNavigationListDesktopSliderArrowsWrapper } from "./CategorySectionMenuNavigationListDesktopSliderArrowsWrapper/CategorySectionMenuNavigationListDesktopSliderArrowsWrapper";
import { CategorySectionMenuNavigationListItem } from "./CategorySectionMenuNavigationListItem";

export const CategorySectionMenuNavigationListDesktop = () => {
    return (
        <div className="hidden w-full xl:flex">
            <NavigationList
                NavigationListItem={CategorySectionMenuNavigationListItem}
                navigationListContent={categorySectionMenuNavigationListContent}
                highlightedElementNumber={0}
                ulClassName="category-section__menu-navigation-list-desktop flex flex-col gap-[78px] h-[694px] overflow-scroll pl-6"
                navClassName="w-full" />
            <CategorySectionMenuNavigationListDesktopSliderArrowsWrapper />
        </div>
    )
}