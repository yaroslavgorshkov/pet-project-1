import { Text } from '@/app/components/Text/Text';
import { twMerge } from 'tailwind-merge';

type HeaderNavigationListItemProps = {
    text: string;
    href: string;
    isHighlighted?: boolean;
};

export const HeaderNavigationListItem = ({
    text,
    href,
    isHighlighted = false,
}: HeaderNavigationListItemProps) => {
    const highlightedClass = isHighlighted
        ? 'font-bold after:top-nl-hover after:opacity-100'
        : 'hover:font-bold after:top-nl after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:after:top-nl-hover';
    const combinedClassName = twMerge(
        'relative after:absolute after:left-0 after:bg-lapis after:w-full after:h-slider-sm',
        highlightedClass
    );

    return (
        <li>
            <a href={href}>
                <Text
                    fontSize="xl"
                    fontFamily="playfair"
                    color="lapis"
                    content={text}
                    className={combinedClassName}
                />
            </a>
        </li>
    );
};
