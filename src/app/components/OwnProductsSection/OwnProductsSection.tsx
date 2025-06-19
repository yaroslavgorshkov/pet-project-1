import { OwnProductsSectionContent } from "./OwnProductsSectionContent/OwnProductsSectionContent"
import { OwnProductsSectionHeadline } from "./OwnProductsSectionHeadline/OwnProductsSectionHeadline"

export const OwnProductsSection = () => {
    return (
        <section className="py-[70px] md:py-[90px]">
            <div className="own-products-section-wrapper flex items-center gap-[32px] w-full overflow-x-scroll pr-[26px] py-[10px]">
                <OwnProductsSectionHeadline />
                <OwnProductsSectionContent />
            </div>
        </section>
    )
}