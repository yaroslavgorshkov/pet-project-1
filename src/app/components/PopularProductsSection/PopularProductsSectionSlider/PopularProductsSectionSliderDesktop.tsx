import { IconButton } from "../../Button/IconButton"

export const PopularProductsSectionSliderDesktop = () => {
    return (
        <div className="hidden xl:flex w-[calc(100%-300px)] flex-col gap-5">
            <div className="relative w-full flex justify-center">
                <div className="w-full h-[3px] bg-lapis"></div>
                <div className="absolute top-[-2px] left-0 w-[120px] h-[7px] bg-mint"></div>
            </div>
            <div className="self-end flex gap-[24px]">
                <div className="rounded-[20px] bg-white-blue w-[40px] h-[40px] flex items-center justify-center">
                    <IconButton iconType={"arrow-left"} iconFillColor={"lapis"} iconSize={"sm"} onClick={() => 1} />
                </div>
                <div className="rounded-[20px] bg-rose w-[40px] h-[40px] flex items-center justify-center">
                    <IconButton iconType={"arrow-right"} iconFillColor={"lapis"} iconSize={"sm"} onClick={() => 1} />
                </div>
            </div>
        </div>
    )
}