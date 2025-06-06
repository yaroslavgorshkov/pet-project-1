import { navigationListContent } from "../../headerMockData";
import { HeaderDesktopNavigationListItem } from "./HeaderDesktopNavigationListItem";

export const HeaderDesktopNavigationList = () => {
    const headerDesktopNavigationListContent = navigationListContent;

    const headerDesktopNavigationList = headerDesktopNavigationListContent.map(item => {
        if (item.id === 0) {
            return <HeaderDesktopNavigationListItem
                key={item.id}
                text={item.text}
                ref={item.ref}
                isHighlighted={true}
            />
        } else {
            return <HeaderDesktopNavigationListItem
                key={item.id}
                text={item.text}
                ref={item.ref}
            />
        }
    })

    return (
        <nav className="h-fit">
            <ul className="list-none flex p-0 m-0 gap-[50px]">
                {headerDesktopNavigationList}
            </ul>
        </nav>
    )
}