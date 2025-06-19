import { NavigationList } from "@/app/components/NavigationList/NavigationList";
import { categorySectionMenuNavigationListContent } from "../categorySectionMockData";
import { CategorySectionMenuNavigationListItem } from "./CategorySectionMenuNavigationListItem";

export const CategorySectionMenuNavigationListTablet = () => {
    return (
        <NavigationList
            renderListItem={({ href, text, isHighlighted }) =>
                <CategorySectionMenuNavigationListItem text={text} href={href} isHighlighted={isHighlighted} />}
            navigationListContent={categorySectionMenuNavigationListContent}
            highlightedElementNumber={0}
            ulClassName="flex flex-wrap gap-5xl justify-center"
            navClassName="xl:hidden"
        />
    )
}