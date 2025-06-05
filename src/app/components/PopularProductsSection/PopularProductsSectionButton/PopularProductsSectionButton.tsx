import { Button } from "../../Button/Button"
import { Text } from "../../Text"

export const PopularProductsSectionButton = () => {
    const popularProductsSectionButtonText = <Text fontSize={"lg"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
        content={"Explore all items"} />

    return (
        <a href="#popular-products-section-explore-more-items">
            <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"md"} paddingBlock={"xl"} borderRadius={"md"}
                endIcon={{ iconType: "arrow-right", iconFillColor: "absolute-white", iconSize: "2xl" }}
                text={popularProductsSectionButtonText} onClick={() => 1} />
        </a>
    )
}