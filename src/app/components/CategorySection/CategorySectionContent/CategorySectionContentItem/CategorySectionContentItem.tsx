import Image from 'next/image';
import { CategorySectionContentItemText } from '@/CategorySection/CategorySectionContent/CategorySectionContentItem/CategorySectionContentItemText';
import { Text } from '@/core/Text/Text';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '@/core/Button/buttonTypes';
import { Button } from '@/core/Button/Button';

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

    const highlightedCategorySectionContentItemTextClass = isHighlighted
        ? 'top-one-third [text-shadow:none]'
        : 'top-half [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] transition-all duration-200 group-hover:top-one-third group-hover:[text-shadow:none]';
    const combinedClassNameCategorySectionContentItemText = twMerge(
        'absolute left-half -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap',
        highlightedCategorySectionContentItemTextClass
    );

    const highlightedCategorySectionContentItemButtonClass = isHighlighted
        ? 'block'
        : 'hidden group-hover:block';
    const combinedClassNameCategorySectionContentItemButton = twMerge(
        'absolute top-two-thirds left-half -translate-x-1/2 -translate-y-1/2 z-10',
        highlightedCategorySectionContentItemButtonClass
    );

    const highlightedCategorySectionContentItemImageClass = isHighlighted
        ? 'blur-sm contrast-md'
        : 'transition-all duration-200 group-hover:blur-sm group-hover:contrast-md';
    const combinedClassNameCategorySectionContentItemImage = twMerge(
        'absolute inset-0',
        highlightedCategorySectionContentItemImageClass
    );

    return (
        <article className="group rounded-md relative h-full min-h-sm md:min-h-md xl:h-auto">
            <div className={combinedClassNameCategorySectionContentItemText}>
                <CategorySectionContentItemText text={text} />
            </div>
            <a
                href={href}
                className={combinedClassNameCategorySectionContentItemButton}
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
            <div className={combinedClassNameCategorySectionContentItemImage}>
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    className="rounded-md brightness-md"
                    objectFit="cover"
                />
            </div>
        </article>
    );
};
