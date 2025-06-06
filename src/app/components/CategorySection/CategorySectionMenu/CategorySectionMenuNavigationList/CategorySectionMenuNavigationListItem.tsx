import { Text } from "@/app/components/Text";

type CategorySectionMenuNavigationListItem = {
    text: string;
    href: string;
    isHighlighted?: boolean;
}

export const CategorySectionMenuNavigationListItem = ({
    text,
    href,
    isHighlighted = false
}: CategorySectionMenuNavigationListItem) => {
    return (
        <li>
            <a href={href}>
                <Text fontSize='3xl' fontFamily='roboto' color='lapis' content={text}
                    className={`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`}
                />
            </a>
        </li>
    )
}