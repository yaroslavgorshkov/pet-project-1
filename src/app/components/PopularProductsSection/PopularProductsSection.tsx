import { PopularProductsSectionButton } from "./PopularProductsSectionButton/PopularProductsSectionButton"
import { PopularProductsSectionContent } from "./PopularProductsSectionContent/PopularProductsSectionContent"
import { PopularProductsSectionHeadline } from "./PopularProductsSectionHeadline/PopularProductsSectionHeadline"
import { PopularProductsSectionImage } from "./PopularProductsSectionImage/PopularProductsSectionImage"
import { PopularProductsSectionSlider } from "./PopularProductsSectionSlider/PopularProductsSectionSlider"

export const PopularProductsSection = () => {
    return (
        <section className="py-section-3xl md:py-section-5xl">
            <div className="relative flex flex-col items-center gap-10xl md:gap-12xl xl:gap-8xl">
                <PopularProductsSectionHeadline />
                <PopularProductsSectionContent />
                <PopularProductsSectionSlider />
                <PopularProductsSectionButton />
                <PopularProductsSectionImage />
            </div>
        </section>
    )
}