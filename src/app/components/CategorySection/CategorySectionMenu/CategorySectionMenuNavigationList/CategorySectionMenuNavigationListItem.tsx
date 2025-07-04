import { Text } from '@/core/Text/Text';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type CategorySectionMenuNavigationListItem = {
    text: string;
    href: string;
};

export const CategorySectionMenuNavigationListItem = ({
    text,
    href,
}: CategorySectionMenuNavigationListItem) => {
    const categorySectionMenuNavigationListItemTextClass = twMerge(
        clsx(
            'xl:hover:font-bold',
            'after:top-nl',
            'after:opacity-0',
            'after:transition-all',
            'after:duration-200',
            'xl:hover:after:opacity-100',
            'xl:hover:after:top-nl-hover',
            'relative',
            'after:absolute',
            'after:left-0',
            'after:bg-lapis',
            'after:w-full',
            'after:h-slider-sm'
        )
    );

    return (
        <li>
            <a href={href} onClick={(e) => e.preventDefault()}>
                <Text
                    fontSize="3xl"
                    fontFamily="roboto"
                    color="lapis"
                    content={text}
                    className={categorySectionMenuNavigationListItemTextClass}
                />
            </a>
        </li>
    );
};
