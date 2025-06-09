import { Button, ButtonProps } from "../../Button/Button"
import { Text } from "../../Text"

export const PopularProductsSectionButton = () => {
    const handlePopularProductsSectionButtonClick = () => {
        // TODO: add PopularProductsSectionButton click function
    }

    const popularProductsSectionButtonProps: ButtonProps = {
        variant: "contained",
        backgroundColor: "mint",
        paddingInline: "md",
        paddingBlock: "xl",
        borderRadius: "md",
        endIcon: { iconType: "arrow-right", iconFillColor: "absolute-white", iconSize: "2xl" },
        onClick: handlePopularProductsSectionButtonClick,
        children:
            (<Text fontSize={"lg"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
                content={"Explore all items"} />)
    }

    return (
        <a href="#popular-products-section-explore-more-items">
            <Button {...popularProductsSectionButtonProps} />
        </a>
    )
}