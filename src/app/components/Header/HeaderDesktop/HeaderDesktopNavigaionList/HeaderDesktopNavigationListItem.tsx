import { Text } from "@/app/components/Text/Text"
import { twMerge } from "tailwind-merge";

type HeaderDesktopNavigationListItemProps = {
    text: string;
    href: string;
    isHighlighted?: boolean;
}

export const HeaderDesktopNavigationListItem = ({
    text,
    href,
    isHighlighted = false
}: HeaderDesktopNavigationListItemProps) => {
    const highlightedClass = isHighlighted ? 'navigation-list__item--highlighted' : '';
    const combinedClassName = twMerge('navigation-list__item', highlightedClass)

    return (
        <li>
            <a href={href}>
                <Text fontSize='xl' fontFamily='playfair' color='lapis' content={text}
                    className={combinedClassName}
                />
            </a>
        </li>
    )
}