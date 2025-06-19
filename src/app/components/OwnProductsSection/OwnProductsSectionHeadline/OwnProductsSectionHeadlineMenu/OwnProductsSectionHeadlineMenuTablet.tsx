import { Text } from "@/app/components/Text/Text"
import { OwnProductsSectionHeadlineMenuSlider } from "./OwnProductsSectionHeadlineMenuSlider/OwnProductsSectionHeadlineMenuSlider"

export const OwnProductsSectionHeadlineMenuTablet = () => {
    return (
        <div className="hidden md:flex gap-4xl items-center">
            <Text fontSize={"lg"} fontFamily={"roboto"} color={"white"} content={"More"} fontWeight="bold" />
            <OwnProductsSectionHeadlineMenuSlider />
        </div>
    )
}