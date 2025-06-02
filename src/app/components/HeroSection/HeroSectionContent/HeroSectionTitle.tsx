import { HeroSectionTitleDescription } from "./HeroSectionTitleDescription"
import { HeroSectionTitleText } from "./HeroSectionTitleText"

export const HeroSectionTitle = () => {
    return (
        <div className="flex flex-col items-center gap-4 md:items-start xl:gap-[54px]">
            <HeroSectionTitleText />
            <HeroSectionTitleDescription />
        </div>
    )
}