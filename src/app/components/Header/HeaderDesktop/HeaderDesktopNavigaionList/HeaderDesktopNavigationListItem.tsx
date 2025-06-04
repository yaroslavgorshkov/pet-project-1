import { Text } from "@/app/components/Text"

type HeaderDesktopNavigationListItemProps = {
    text: string;
    ref: string;
    isHighlighted?: boolean;
}

export const HeaderDesktopNavigationListItem = ({
    text,
    ref,
    isHighlighted = false
}: HeaderDesktopNavigationListItemProps) => {
    return (
        <li>
            <a href={ref}>
                <Text fontSize='xl' fontFamily='playfair' color='lapis' fontWeight='normal' content={text}
                    className={`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`}
                />
            </a>
        </li>
    )
}