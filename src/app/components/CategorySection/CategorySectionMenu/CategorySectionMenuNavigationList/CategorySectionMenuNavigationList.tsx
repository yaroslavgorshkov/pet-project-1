import { CategorySectionMenuNavigationListItem } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListItem';
import { categorySectionMenuNavigationListContent } from '@/CategorySection/categorySectionMockData';
import { CategorySectionMenuNavigationListSlider } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListSlider';
import { NavigationList } from '@/core/NavigationList/NavigationList';

export const CategorySectionMenuNavigationList = () => {
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
                    ulClassName="flex flex-wrap gap-5xl justify-center"
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
                    ulClassName="category-section__menu-navigation-list-desktop flex flex-col gap-11xl max-h-sm overflow-scroll pl-el-lg"
                    navClassName="w-full"
                />
                <CategorySectionMenuNavigationListSlider />
            </div>
        </>
    );
};
