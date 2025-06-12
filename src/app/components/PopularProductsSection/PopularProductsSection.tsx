import { PopularProductsSectionButton } from "./PopularProductsSectionButton/PopularProductsSectionButton"
import { PopularProductsSectionContent } from "./PopularProductsSectionContent/PopularProductsSectionContent"
import { PopularProductsSectionHeadline } from "./PopularProductsSectionHeadline/PopularProductsSectionHeadline"
import { PopularProductsSectionImage } from "./PopularProductsSectionImage/PopularProductsSectionImage"
import { PopularProductsSectionSlider } from "./PopularProductsSectionSlider/PopularProductsSectionSlider"

export const PopularProductsSection = () => {
    return (
        <section className="py-20 md:py-[100px]">
            <div className="relative flex flex-col items-center gap-[60px] md:gap-[100px] xl:gap-[54px]">
                <PopularProductsSectionHeadline />
                <PopularProductsSectionContent />
                <PopularProductsSectionSlider />
                <PopularProductsSectionButton />
                <PopularProductsSectionImage />
            </div>
        </section>
    )
}