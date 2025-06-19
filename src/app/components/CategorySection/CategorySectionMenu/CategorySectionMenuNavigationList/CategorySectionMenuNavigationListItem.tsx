import { Text } from "@/app/components/Text/Text";
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
    const highlightedClass = isHighlighted ? 'font-bold after:top-nl-hover after:opacity-100' : 'xl:hover:font-bold after:top-nl after:opacity-0 after:transition-all after:duration-200 xl:hover:after:opacity-100 xl:hover:after:top-nl-hover';
    const combinedClassName =
        twMerge("relative after:content-[''] after:absolute after:left-0 after:bg-lapis after:w-full after:h-slider-sm",
            highlightedClass);

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