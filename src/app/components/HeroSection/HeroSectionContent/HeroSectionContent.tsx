import { HeroSectionButton } from "../HeroSectionButton"
import { HeroSectionTitle } from "./HeroSectionTitle"

export const HeroSectionContent = () => {
    return (
        <div className="flex w-full flex-col gap-[52px] items-center md:items-start xl:gap-[54px]">
            <HeroSectionTitle />
            <HeroSectionButton />
        </div>
    )
}