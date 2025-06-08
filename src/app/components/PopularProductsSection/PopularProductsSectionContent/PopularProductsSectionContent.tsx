import { popularProductsSectionContent } from "../popularProductsSectionMockData";
import { PopularProductsSectionContentItem } from "./PopularProductsSectionContentItem";

export const PopularProductsSectionContent = () => {
    const popularProductsList = popularProductsSectionContent.map((
        { href, imgRef, name, description, price, backgroundColor, alt, id }) => {
        return (
            <PopularProductsSectionContentItem href={href} imgRef={imgRef} name={name}
                description={description} price={price}
                backgroundColor={backgroundColor} alt={alt} key={id} />
        )
    })

    return (
        <div className="popular-products-section-content flex gap-8 overflow-x-scroll 
        w-full px-9 md:px-10 lg:px-[60px] xl:px-[196px]">
            {popularProductsList}
        </div>
    )
}