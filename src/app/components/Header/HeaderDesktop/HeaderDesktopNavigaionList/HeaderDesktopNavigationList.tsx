import { NavigationList } from "@/app/components/NavigationList/NavigationList";
import { navigationListContent } from "../../headerMockData";
import { HeaderDesktopNavigationListItem } from "./HeaderDesktopNavigationListItem";

export const HeaderDesktopNavigationList = () => {
    const headerDesktopNavigationListContent = navigationListContent;

    return (
        <NavigationList
            NavigationListItem={HeaderDesktopNavigationListItem}
            navigationListContent={headerDesktopNavigationListContent}
            highlightedElementNumber={0}
            ulClassName="flex gap-[50px]" />
    )
}