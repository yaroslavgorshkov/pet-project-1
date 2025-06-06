import { PopularProductsSectionSliderDesktop } from "./PopularProductsSectionSliderDesktop"
import { PopularProductsSectionSliderMobile } from "./PopularProductsSectionSliderMobile"

export const PopularProductsSectionSlider = () => {
    return (
        <>
            <PopularProductsSectionSliderMobile />
            <PopularProductsSectionSliderDesktop />
        </>
    )
}