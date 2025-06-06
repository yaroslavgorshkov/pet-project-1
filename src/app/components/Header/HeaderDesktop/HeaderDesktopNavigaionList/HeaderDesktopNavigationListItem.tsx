import { Text } from "@/app/components/Text"

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
    return (
        <li>
            <a href={href}>
                <Text fontSize='xl' fontFamily='playfair' color='lapis' content={text}
                    className={`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`}
                />
            </a>
        </li>
    )
}