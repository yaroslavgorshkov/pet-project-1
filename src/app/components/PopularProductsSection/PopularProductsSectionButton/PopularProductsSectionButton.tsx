import { Button, ContainedButtonProps } from "../../Button/Button"
import { Text } from "../../Text"

export const PopularProductsSectionButton = () => {
    const handlePopularProductsSectionButtonClick = () => {
        // TODO: add PopularProductsSectionButton click function
    }

    const popularProductsSectionButtonProps: Omit<ContainedButtonProps, "children"> = {
        variant: "contained",
        backgroundColor: "mint",
        paddingInline: "md",
        paddingBlock: "xl",
        borderRadius: "md",
        endIcon: { iconType: "arrow-right", iconFillColor: "absolute-white", iconSize: "2xl" },
        onClick: handlePopularProductsSectionButtonClick
    }

    return (
        <a href="#popular-products-section-explore-more-items">
            <Button {...popularProductsSectionButtonProps} >
                <Text fontSize={"lg"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
                    content={"Explore all items"} />
            </Button>
        </a>
    )
}