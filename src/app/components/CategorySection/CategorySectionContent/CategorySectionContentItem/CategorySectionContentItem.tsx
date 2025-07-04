import Image from 'next/image';
import { CategorySectionContentItemText } from '@/CategorySection/CategorySectionContent/CategorySectionContentItem/CategorySectionContentItemText';
import { Text } from '@/core/Text/Text';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Button } from '@/core/Button/Button';
import clsx from 'clsx';

type CategorySectionContentItemProps = {
    text: string;
    href: string;
    imgSrc: string;
    alt: string;
    isHighlighted?: boolean;
};

export const CategorySectionContentItem = ({
    text,
    href,
    imgSrc,
    alt,
    isHighlighted = false,
}: CategorySectionContentItemProps) => {
    const handleCategorySectionContentItemButtonClick = () => {
        // TODO: add CategorySectionContentItem button click function
    };

    const categorySectionContentItemButtonSmProps: Omit<
        ButtonProps,
        'children'
    > = {
        buttonSize: 'sm',
        borderRadius: 'sm',
        variant: 'contained',
        backgroundColor: 'white-blue',
        onClick: handleCategorySectionContentItemButtonClick,
    };

    const highlightedCategorySectionContentItemTextClass = twMerge(
        clsx(
            isHighlighted
                ? 'top-one-third'
                : [
                      'top-half',
                      'text-shadow',
                      'text-shadow-blur-2',
                      'text-shadow-x-lg',
                      'text-shadow-y-lg',
                      'transition-all',
                      'duration-200',
                      'group-hover:top-one-third',
                      'group-hover:text-shadow-x-0',
                      'group-hover:text-shadow-y-0',
                  ],
            'absolute',
            'left-half',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'z-10',
            'whitespace-nowrap'
        )
    );

    const highlightedCategorySectionContentItemButtonClass = twMerge(
        clsx(
            isHighlighted ? 'block' : 'hidden group-hover:block',
            'absolute',
            'top-two-thirds',
            'left-half',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'z-10'
        )
    );

    const highlightedCategorySectionContentItemImageClass = twMerge(
        clsx(
            isHighlighted
                ? ['blur-sm', 'contrast-md']
                : [
                      'transition-all',
                      'duration-200',
                      'group-hover:blur-sm',
                      'group-hover:contrast-md',
                  ],
            'absolute',
            'inset-0'
        )
    );

    return (
        <article className="group rounded-md relative h-full min-h-sm md:min-h-md xl:h-auto">
            <div className={highlightedCategorySectionContentItemTextClass}>
                <CategorySectionContentItemText text={text} />
            </div>
            <a
                href={href}
                className={highlightedCategorySectionContentItemButtonClass}
                onClick={(e) => e.preventDefault()}
            >
                <Button {...categorySectionContentItemButtonSmProps}>
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={'Explore'}
                    />
                </Button>
            </a>
            <div className={highlightedCategorySectionContentItemImageClass}>
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    className="rounded-md brightness-md"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </article>
    );
};
