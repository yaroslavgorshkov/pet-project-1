import { twMerge } from "tailwind-merge";
import { NavigationListContentItem } from "../types";

type NavigationListItemProps = { text: string; href: string; isHighlighted: boolean }

type NavigationListProps = {
    NavigationListItem: React.FC<NavigationListItemProps>;
    highlightedElementNumber?: number;
    navigationListContent: NavigationListContentItem[];
    sliceTo?: number;
    navClassName?: string;
    ulClassName?: string;
}

export const NavigationList = ({
    NavigationListItem,
    highlightedElementNumber,
    navigationListContent,
    sliceTo,
    navClassName = '',
    ulClassName = ''
}: NavigationListProps) => {
    const slicedListContent = sliceTo ? navigationListContent.slice(0, sliceTo) : navigationListContent;
    const slicedList = slicedListContent.map(({ id, text, href }) =>
    (<NavigationListItem
        key={id}
        text={text}
        href={href}
        isHighlighted={id === highlightedElementNumber}
    />))

    const combinedUlClassName = twMerge(`list-none p-0 m-0 ${ulClassName}`);

    return (
        <nav className={navClassName}>
            <ul className={combinedUlClassName}>
                {slicedList}
            </ul>
        </nav>
    )
}