import { IconButton } from "../../Button/IconButton"

export const PopularProductsSectionSliderDesktop = () => {
    const handlePopularProductsSectionSliderArrowButtonClick = () => {
        // TODO: add PopularProductsSectionSliderArrowButton click function
    }

    return (
        <div className="hidden xl:flex w-responsive-sm flex-col gap-md">
            <div className="relative w-full flex justify-center">
                <div className="w-full h-slider-sm bg-lapis"></div>
                <div className="absolute top-slider left-0 w-slider-xl h-slider-md bg-mint"></div>
            </div>
            <div className="self-end flex gap-lg">
                <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton iconType={"arrow-left"} iconFillColor={"lapis"} iconSize={"sm"}
                        onClick={handlePopularProductsSectionSliderArrowButtonClick} />
                </div>
                <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                    <IconButton iconType={"arrow-right"} iconFillColor={"lapis"} iconSize={"sm"}
                        onClick={handlePopularProductsSectionSliderArrowButtonClick} />
                </div>
            </div>
        </div>
    )
}