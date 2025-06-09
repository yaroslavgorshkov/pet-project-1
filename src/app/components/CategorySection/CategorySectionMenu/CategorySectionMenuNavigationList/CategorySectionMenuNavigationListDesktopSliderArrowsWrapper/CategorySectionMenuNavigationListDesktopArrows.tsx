import { IconButton } from "@/app/components/Button/IconButton"

export const CategorySectionMenuNavigationListDesktopArrows = () => {
    const handleCategorySectionMenuNavigationListDesktopArrowsButtonClick = () => {
        // TODO: add CategorySectionMenuNavigationListDesktopArrowsButton click function
    }

    return (
        <div className="flex flex-col gap-[24px]">
            <div className="rounded-[20px] bg-white-blue w-[40px] h-[40px] flex items-center justify-center">
                <IconButton iconType={"arrow-up"} iconFillColor={"lapis"} iconSize={"sm"}
                    onClick={handleCategorySectionMenuNavigationListDesktopArrowsButtonClick} />
            </div>
            <div className="rounded-[20px] bg-rose w-[40px] h-[40px] flex items-center justify-center">
                <IconButton iconType={"arrow-down"} iconFillColor={"lapis"} iconSize={"sm"}
                    onClick={handleCategorySectionMenuNavigationListDesktopArrowsButtonClick} />
            </div>
        </div>
    )
}