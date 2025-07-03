import { twMerge } from 'tailwind-merge';
import { Fragment, ReactNode } from 'react';
import React from 'react';
import { NavigationListContentItem } from '@/types';
import clsx from 'clsx';

type RenderListItemProps = {
    text: string;
    href: string;
    isHighlighted: boolean;
};

type NavigationListProps = {
    renderListItem: ({
        text,
        href,
        isHighlighted,
    }: RenderListItemProps) => ReactNode;
    highlightedElementNumber?: number;
    navigationListContent: NavigationListContentItem[];
    navClassName?: string;
    ulClassName?: string;
};

export const NavigationList = ({
    renderListItem,
    highlightedElementNumber,
    navigationListContent,
    navClassName = '',
    ulClassName = '',
}: NavigationListProps) => {
    const renderList = navigationListContent.map(({ id, text, href }) => {
        const isNavigationListItemHighlighted = id === highlightedElementNumber;
        const renderContent = renderListItem({
            text,
            href,
            isHighlighted: isNavigationListItemHighlighted,
        });
        return <Fragment key={id}>{renderContent}</Fragment>;
    });

    const navigationListUlClass = twMerge(
        clsx('list-none', 'p-0', 'm-0', ulClassName)
    );

    return (
        <nav className={navClassName}>
            <ul className={navigationListUlClass}>{renderList}</ul>
        </nav>
    );
};
