import { BenefitsSectionContent } from "./BenefitsSectionContent/BenefitsSectionContent"
import { BenefitsSectionHeadline } from "./BenefitsSectionHeadline"

export const BenefitsSection = () => {
    return (
        <section className="py-[80px] px-[16px] md:py-[100px] md:px-[20px] lg:px-[40px] xl:px-[120px] 2xl:px-[286px] bg-white-blue">
            <div className="flex flex-col gap-[104px]">
                <BenefitsSectionHeadline />
                <BenefitsSectionContent />
            </div>
        </section>
    )
}