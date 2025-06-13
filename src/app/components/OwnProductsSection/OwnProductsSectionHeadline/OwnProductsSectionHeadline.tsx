import { OwnProductsSectionHeadlineDescription } from "./OwnProductsSectionHeadlineDescription"
import { OwnProductsSectionHeadlineMenu } from "./OwnProductsSectionHeadlineMenu/OwnProductsSectionHeadlineMenu"
import { OwnProductsSectionHeadlineText } from "./OwnProductsSectionHeadlineText"

export const OwnProductsSectionHeadline = () => {
    return (
        <div className="flex flex-col flex-shrink-0 gap-[32px] w-[195px] px-[16px] py-[50px] rounded-r-[16px] bg-mint
            md:px-[20px] md:py-[122px] md:w-[400px] xl:pl-[150px] xl:pr-[100px] xl:w-[577px]">
            <OwnProductsSectionHeadlineText />
            <OwnProductsSectionHeadlineDescription />
            <OwnProductsSectionHeadlineMenu />
        </div>
    )
}