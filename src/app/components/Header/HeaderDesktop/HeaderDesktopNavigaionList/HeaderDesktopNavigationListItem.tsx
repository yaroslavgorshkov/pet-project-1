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
    const highlightedClass = isHighlighted ? 'font-bold after:top-[110%] after:opacity-100' : 'hover:font-bold after:top-[180%] after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:after:top-[110%]';
    const combinedClassName =
        twMerge("relative after:content-[''] after:absolute after:left-0 after:bg-lapis after:w-full after:h-[3px]",
            highlightedClass);

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