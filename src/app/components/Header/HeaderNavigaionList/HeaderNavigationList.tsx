import { NavigationList } from '@/core/NavigationList/NavigationList';
import { navigationListContent } from '@/Header/headerMockData';
import { HeaderNavigationListItem } from '@/Header/HeaderNavigaionList/HeaderNavigationListItem';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const HeaderNavigationList = () => {
    const [activeElementHash, setActiveElementHash] = useState('#home');

    useEffect(() => {
        const handleHashChange = () => {
            setActiveElementHash(window.location.hash || '#home');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const activeElement = navigationListContent.find(
        (element) => element.href === activeElementHash
    );

    const activeElementId = activeElement?.id;
    const headerNavigationListUlClass = clsx('flex', 'gap-6xl');

    return (
        <>
            <NavigationList
                renderListItem={({ href, text, isHighlighted }) => (
                    <HeaderNavigationListItem
                        text={text}
                        href={href}
                        isHighlighted={isHighlighted}
                    />
                )}
                navigationListContent={navigationListContent}
                highlightedElementNumber={activeElementId}
                ulClassName={headerNavigationListUlClass}
            />
        </>
    );
};
