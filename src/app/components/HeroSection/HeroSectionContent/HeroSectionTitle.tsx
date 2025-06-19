import { HeroSectionTitleDescription } from "./HeroSectionTitleDescription"
import { HeroSectionTitleText } from "./HeroSectionTitleText"

export const HeroSectionTitle = () => {
    return (
        <div className="flex flex-col items-center gap-md md:items-start xl:gap-8xl">
            <HeroSectionTitleText />
            <HeroSectionTitleDescription />
        </div>
    )
}