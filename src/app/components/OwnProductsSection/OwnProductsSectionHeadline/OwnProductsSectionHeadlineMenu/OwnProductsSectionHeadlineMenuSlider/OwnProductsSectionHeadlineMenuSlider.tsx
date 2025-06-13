import { IconButton } from "@/app/components/Button/IconButton"

export const OwnProductsSectionHeadlineMenuSlider = () => {
    const handleOwnProductsSectionHeadlineMenuSliderArrowButtonClick = () => {
        // TODO: add OwnProductsSectionHeadlineMenuSlider button click function
    }

    return (
        <div className="flex gap-[42px] items-center">
            <div className="relative">
                <div className="absolute h-[5px] w-[27px] bg-white top-0 left-0"></div>
                <div className="w-[87px] h-[3px] bg-lapis"></div>
            </div>
            <div className="flex gap-[24px]">
                <div className="rounded-[20px] bg-white-blue w-[40px] h-[40px] flex items-center justify-center">
                    <IconButton iconType={"arrow-left"} iconFillColor={"lapis"} iconSize={"sm"}
                        onClick={handleOwnProductsSectionHeadlineMenuSliderArrowButtonClick} />
                </div>
                <div className="rounded-[20px] bg-rose w-[40px] h-[40px] flex items-center justify-center">
                    <IconButton iconType={"arrow-right"} iconFillColor={"lapis"} iconSize={"sm"}
                        onClick={handleOwnProductsSectionHeadlineMenuSliderArrowButtonClick} />
                </div>
            </div>
        </div>
    )
}