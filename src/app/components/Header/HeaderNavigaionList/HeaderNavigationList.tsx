import { NavigationList } from '@/core/NavigationList/NavigationList';
import { navigationListContent } from '@/Header/headerMockData';
import { HeaderNavigationListItem } from '@/Header/HeaderNavigaionList/HeaderNavigationListItem';

export const HeaderNavigationList = () => {
    const headerNavigationListContent = navigationListContent;
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
                ulClassName="flex gap-6xl"
            />
        </>
    );
};
