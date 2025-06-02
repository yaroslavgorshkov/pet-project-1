import { CategorySectionHeadlineTitle } from "./CategorySectionHeadlineTitle"
import { CategorySectionMenu } from "../CategorySectionMenu/CategorySectionMenu"

export const CategorySectionHeadlineMobile = () => {
    return (
        <div className="flex flex-col gap-9 items-center w-full md:max-w-[791px] xl:hidden">
            <CategorySectionHeadlineTitle />
            <CategorySectionMenu />
        </div>
    )
}