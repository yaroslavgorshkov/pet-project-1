import { Text } from "@/app/components/Text";
import { twMerge } from "tailwind-merge";

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
    const combinedClassName = twMerge(`navigation-list__item ${isHighlighted ? 'navigation-list__item--highlighted' : ''}`);

    return (
        <li>
            <a href={href}>
                <Text fontSize='3xl' fontFamily='roboto' color='lapis' content={text}
                    className={combinedClassName}
                />
            </a>
        </li>
    )
}