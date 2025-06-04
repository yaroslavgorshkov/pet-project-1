import { Text } from "@/app/components/Text";

type CategorySectionMenuNavigationListItem = {
    text: string;
    ref: string;
    isHighlighted?: boolean;
}

export const CategorySectionMenuNavigationListItem = ({
    text,
    ref,
    isHighlighted = false
}: CategorySectionMenuNavigationListItem) => {
    return (
        <li>
            <a href={ref}>
                <Text fontSize='3xl' fontFamily='roboto' color='lapis' fontWeight='normal' content={text}
                    className={`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`}
                />
            </a>
        </li>
    )
}