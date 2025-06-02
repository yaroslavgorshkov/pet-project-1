import { CategorySectionMenuNavigationListDesktopArrows } from "./CategorySectionMenuNavigationListDesktopArrows"
import { CategorySectionMenuNavigationListDesktopSlider } from "./CategorySectionMenuNavigationListDesktopSlider"

export const CategorySectionMenuNavigationListDesktopSliderArrowsWrapper = () => {
    return (
        <div className="flex flex-col gap-[10px] items-center">
            <CategorySectionMenuNavigationListDesktopSlider />
            <CategorySectionMenuNavigationListDesktopArrows />
        </div>
    )
}