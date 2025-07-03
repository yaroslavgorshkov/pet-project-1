import { CategorySectionMenuNavigationListItem } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListItem';
import { categorySectionMenuNavigationListContent } from '@/CategorySection/categorySectionMockData';
import { CategorySectionMenuNavigationListSlider } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListSlider';
import { NavigationList } from '@/core/NavigationList/NavigationList';
import clsx from 'clsx';

export const CategorySectionMenuNavigationList = () => {
    const categorySectionMenuNavigationListUlClassNameSm = clsx(
        'flex',
        'flex-wrap',
        'gap-5xl',
        'justify-center'
    );

    const categorySectionMenuNavigationListUlClassNameXl = clsx(
        'category-section__menu-navigation-list-desktop',
        'flex',
        'flex-col',
        'gap-11xl',
        'max-h-sm',
        'overflow-scroll',
        'pl-el-lg'
    );

    const categorySectionMenuNavigationListNavClassNameXl = clsx('w-full');

    return (
        <>
            <div className="xl:hidden">
                <NavigationList
                    renderListItem={({ href, text, isHighlighted }) => (
                        <CategorySectionMenuNavigationListItem
                            text={text}
                            href={href}
                            isHighlighted={isHighlighted}
                        />
                    )}
                    navigationListContent={
                        categorySectionMenuNavigationListContent
                    }
                    highlightedElementNumber={0}
                    ulClassName={categorySectionMenuNavigationListUlClassNameSm}
                />
            </div>
            <div className="hidden w-full xl:flex">
                <NavigationList
                    renderListItem={({ href, text, isHighlighted }) => (
                        <CategorySectionMenuNavigationListItem
                            text={text}
                            href={href}
                            isHighlighted={isHighlighted}
                        />
                    )}
                    navigationListContent={
                        categorySectionMenuNavigationListContent
                    }
                    highlightedElementNumber={0}
                    ulClassName={categorySectionMenuNavigationListUlClassNameXl}
                    navClassName={
                        categorySectionMenuNavigationListNavClassNameXl
                    }
                />
                <CategorySectionMenuNavigationListSlider />
            </div>
        </>
    );
};
