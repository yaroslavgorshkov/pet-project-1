import { HeroSectionContent } from "./HeroSectionContent/HeroSectionContent"
import { HeroSectionImage } from "./HeroSectionImage"

export const HeroSection = () => {
    return (
        <section className="h-dvh relative box-content flex justify-center items-center px-4 py-[100px] md:py-20 md:px-5 lg:px-10 xl:px-[150px] xl:pb-[100px]">
            <HeroSectionContent />
            <HeroSectionImage />
        </section>
    )
}