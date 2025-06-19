import { OwnProductsSectionContent } from "./OwnProductsSectionContent/OwnProductsSectionContent"
import { OwnProductsSectionHeadline } from "./OwnProductsSectionHeadline/OwnProductsSectionHeadline"

export const OwnProductsSection = () => {
    return (
        <section className="py-section-2xl md:py-section-4xl">
            <div className="own-products-section-wrapper flex items-center gap-2xl w-full overflow-x-scroll pr-el-lg py-el-sm">
                <OwnProductsSectionHeadline />
                <OwnProductsSectionContent />
            </div>
        </section>
    )
}