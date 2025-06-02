import { CategorySectionContent } from "./CategorySectionContent/CategorySectionContent"
import { CategorySectionHeadline } from "./CategorySectionHeadline/CategorySectionHeadline"

export const CategorySection = () => {
    return (
        <section className="px-4 py-20 md:px-5 md:py-[100px] lg:px-10 xl:px-[150px]">
            <div className="flex flex-col gap-[60px] items-center md:gap-[100px]">
                <CategorySectionHeadline />
                <CategorySectionContent />
            </div>
        </section>
    )
}