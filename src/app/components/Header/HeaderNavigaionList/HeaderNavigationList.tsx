import { NavigationList } from '@/core/NavigationList/NavigationList';
import { navigationListContent } from '@/Header/headerMockData';
import { HeaderNavigationListItem } from '@/Header/HeaderNavigaionList/HeaderNavigationListItem';
import clsx from 'clsx';

export const HeaderNavigationList = () => {
    const headerNavigationListContent = navigationListContent;
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
                navigationListContent={headerNavigationListContent}
                highlightedElementNumber={0}
                ulClassName={headerNavigationListUlClass}
            />
        </>
    );
};
