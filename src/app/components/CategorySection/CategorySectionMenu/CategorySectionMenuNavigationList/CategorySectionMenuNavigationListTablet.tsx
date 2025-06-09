import { NavigationList } from "@/app/components/NavigationList/NavigationList";
import { categorySectionMenuNavigationListContent } from "../categorySectionMockData";
import { CategorySectionMenuNavigationListItem } from "./CategorySectionMenuNavigationListItem";

export const CategorySectionMenuNavigationListTablet = () => {
    return (
        <NavigationList
            NavigationListItem={CategorySectionMenuNavigationListItem}
            navigationListContent={categorySectionMenuNavigationListContent}
            highlightedElementNumber={0}
            ulClassName="flex flex-wrap gap-[44px] justify-center"
            navClassName="xl:hidden"
        />
    )
}