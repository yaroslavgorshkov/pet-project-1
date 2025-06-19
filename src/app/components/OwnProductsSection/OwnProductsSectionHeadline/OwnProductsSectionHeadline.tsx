import { OwnProductsSectionHeadlineDescription } from "./OwnProductsSectionHeadlineDescription"
import { OwnProductsSectionHeadlineMenu } from "./OwnProductsSectionHeadlineMenu/OwnProductsSectionHeadlineMenu"
import { OwnProductsSectionHeadlineText } from "./OwnProductsSectionHeadlineText"

export const OwnProductsSectionHeadline = () => {
    return (
        <div className="flex flex-col flex-shrink-0 gap-2xl w-full max-w-sm px-el-sm py-el-5xl rounded-r-lg bg-mint
            md:px-el-md md:py-el-9xl md:max-w-md xl:pl-el-10xl xl:pr-el-8xl xl:w-full xl:max-w-lg">
            <OwnProductsSectionHeadlineText />
            <OwnProductsSectionHeadlineDescription />
            <OwnProductsSectionHeadlineMenu />
        </div>
    )
}