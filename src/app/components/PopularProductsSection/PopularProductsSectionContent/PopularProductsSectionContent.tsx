import { popularProductsSectionContent } from "../popularProductsSectionMockData";
import { PopularProductsSectionContentItem } from "./PopularProductsSectionContentItem";

export const PopularProductsSectionContent = () => {
    const popularProductsList = popularProductsSectionContent.map(item => {
        return (
            <PopularProductsSectionContentItem ref={item.ref} imgRef={item.imgRef} name={item.name}
                description={item.description} price={item.price} backgroundColor={item.backgroundColor}
                alt={item.alt} key={item.id} />
        )
    })

    return (
        <div className="popular-products-section-content flex gap-8 overflow-x-scroll w-full px-9 md:px-10 lg:px-[60px] xl:px-[196px]">
            {popularProductsList}
        </div>
    )
}