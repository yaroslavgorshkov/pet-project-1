import { twMerge } from "tailwind-merge";
import { NavigationListContentItem } from "../types";

type NavigationListItemProps = { text: string; href: string; isHighlighted: boolean }

type NavigationListProps = {
    NavigationListItem: React.FC<NavigationListItemProps>;
    highlightedElementNumber?: number;
    navigationListContent: NavigationListContentItem[];
    navClassName?: string;
    ulClassName?: string;
}

export const NavigationList = ({
    NavigationListItem,
    highlightedElementNumber,
    navigationListContent,
    navClassName = '',
    ulClassName = ''
}: NavigationListProps) => {
    const slicedList = navigationListContent.map(({ id, text, href }) => {
        const isNavigationListItemHighlighted = (id === highlightedElementNumber);
        return (<NavigationListItem
            key={id}
            text={text}
            href={href}
            isHighlighted={isNavigationListItemHighlighted}
        />)
    })

    const combinedUlClassName = twMerge('list-none p-0 m-0', ulClassName);

    return (
        <nav className={navClassName}>
            <ul className={combinedUlClassName}>
                {slicedList}
            </ul>
        </nav>
    )
}