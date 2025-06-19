import { NavigationList } from "@/app/components/NavigationList/NavigationList";
import { navigationListContent } from "../../headerMockData";
import { HeaderDesktopNavigationListItem } from "./HeaderDesktopNavigationListItem";

export const HeaderDesktopNavigationList = () => {
    const headerDesktopNavigationListContent = navigationListContent;

    return (
        <NavigationList
            renderListItem={({ href, text, isHighlighted }) =>
                <HeaderDesktopNavigationListItem text={text} href={href} isHighlighted={isHighlighted} />}
            navigationListContent={headerDesktopNavigationListContent}
            highlightedElementNumber={0}
            ulClassName="flex gap-6xl" />
    )
}