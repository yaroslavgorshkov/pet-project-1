import { CategorySectionMenuNavigationListDesktopArrows } from './CategorySectionMenuNavigationListDesktopArrows';
import { CategorySectionMenuNavigationListDesktopSlider } from './CategorySectionMenuNavigationListDesktopSlider';

export const CategorySectionMenuNavigationListDesktopSliderArrowsWrapper =
    () => {
        return (
            <div className="flex flex-col gap-sm items-center">
                <CategorySectionMenuNavigationListDesktopSlider />
                <CategorySectionMenuNavigationListDesktopArrows />
            </div>
        );
    };
